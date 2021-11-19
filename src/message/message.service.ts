import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageEntity } from './message.entity';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/user.entity';
import { ChatService } from 'src/chat/chat.service';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly messageRepo: Repository<MessageEntity>,
    private readonly chatService: ChatService,
  ) {}

  async createMessage({ chat_id, message, user_from }) {
    const chat = await this.chatService.getChatById(chat_id);
    const createdMessage = await this.messageRepo
      .create({
        message,
        chat,
        user_from,
      })
      .save();
    if (createdMessage) {
      return createdMessage;
    } else {
      throw new UnprocessableEntityException();
    }
  }

  async setMessagesRead(message_ids: string[]) {
    await this.messageRepo
      .createQueryBuilder('message')
      .update(MessageEntity, { read: true })
      .where('id IN (:...id)', { id: message_ids })
      .execute();
  }
}
