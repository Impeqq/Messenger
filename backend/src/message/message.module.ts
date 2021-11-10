import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PubSub } from 'graphql-subscriptions';
import { MessageEntity } from './message.entity';
import { MessageService } from './message.service';
import { MessageResolver } from './message.resolver';
import { ChatService } from 'src/chat/chat.service';
import { ChatEntity } from 'src/chat/chat.entity';
import { UserEntity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { FileEntity } from 'src/file/file.entity';
import { FileService } from 'src/file/file.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      MessageEntity,
      ChatEntity,
      UserEntity,
      FileEntity,
    ]),
  ],
  providers: [
    MessageResolver,
    MessageService,
    ChatService,
    UserService,
    FileService,
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(),
    },
  ],
})
export class MessageModule {}
