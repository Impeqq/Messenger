import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatEntity } from './chat.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { UserEntity } from 'src/user/user.entity';
import { MessageService } from 'src/message/message.service';
import { MessageEntity } from 'src/message/message.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatEntity)
    private readonly chatRepo: Repository<ChatEntity>,
    @InjectRepository(MessageEntity)
    private readonly messageRepo: Repository<MessageEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    private readonly userService: UserService,
  ) {}

  async createChat(user_to_id: string, user_from: UserEntity) {
    const user_to = await this.userService.findOne(user_to_id);
    if (!Boolean(user_to)) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const existsChat = await this.existsChat(user_to.id, user_from.id);

    if (existsChat) {
      return existsChat;
    }

    const chat = new ChatEntity();
    if (user_to.id === user_from.id) {
      chat.users = [user_to];
    } else {
      chat.users = [user_from, user_to];
    }
    return await this.chatRepo.save(chat);
  }

  async existsChat(user_to: string, user_from: string) {
    const isSelf = user_to === user_from ? 1 : 2;
    const existingChat = (
      await this.chatRepo
        .createQueryBuilder('chat')
        .leftJoinAndSelect('chat.users', 'users')
        .where('users.id IN (:...users)', { users: [user_from, user_to] })
        .getMany()
    ) // TypeORM not support search in an array by two values ​​at once
      .map((chat) => chat.users.length === isSelf && chat)
      .filter((chat) => chat)
      .map((chat) => {
        const correctCount = chat.users.reduce((acc, user): any => {
          return (acc += Number([user_from, user_to].includes(user.id)));
        }, 0);
        return correctCount === chat.users.length && chat;
      })
      .filter((chat) => chat);

    return existingChat[0];
  }

  async getChatByIdWithMessages(id: string, limit: number, offset: number) {
    const chat = await this.chatRepo
      .createQueryBuilder('chat')
      .where('chat.id = :id', { id })
      .getOne();

    chat.messages = await this.messageRepo
      .createQueryBuilder('message')
      .leftJoinAndSelect('message.chat', 'chat')
      .leftJoinAndSelect('message.user_from', 'user')
      .where('chat.id = :id', { id: id })
      .orderBy('message.createdAt', 'DESC')
      .skip(offset)
      .take(limit)
      .getMany();

    chat.users = await this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.chats', 'chat')
      .where('chat.id = :id', { id })
      .getMany();

    return chat;
  }

  async getChatById(id: string) {
    return this.chatRepo.findOne(id);
  }

  async getMyChat(chat_id: string) {
    const chat = await this.chatRepo
      .createQueryBuilder('chat')
      .where('chat.id = :id', { id: chat_id })
      .innerJoinAndSelect('chat.users', 'users')
      .getOne();

    return this.addUsersAndMessagesToChat(chat);
  }

  async getMyChats(user: UserEntity) {
    const chats = await this.chatRepo
      .createQueryBuilder('chat')
      .innerJoinAndSelect('chat.users', 'users', 'users.id IN (:...id)', {
        id: [user.id],
      })
      .innerJoinAndSelect('chat.messages', 'message')
      .orderBy('message.createdAt', 'DESC')
      .getMany();

    return chats.map((chat) => this.addUsersAndMessagesToChat(chat));
  }

  async addUsersAndMessagesToChat(chat: ChatEntity) {
    const users = await this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.chats', 'chat')
      .where('chat.id = :id', { id: chat.id })
      .getMany();

    const messages = await this.messageRepo
      .createQueryBuilder('message')
      .leftJoinAndSelect('message.chat', 'chat')
      .leftJoinAndSelect('message.user_from', 'user')
      .where('chat.id = :id', { id: chat.id })
      .orderBy('message.createdAt', 'DESC')
      .take(1)
      .getMany();

    chat.messages = messages;
    chat.users = users;

    return chat;
  }
}
