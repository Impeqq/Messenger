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
@Module({
  imports: [TypeOrmModule.forFeature([MessageEntity, ChatEntity, UserEntity])],
  providers: [
    MessageResolver,
    MessageService,
    ChatService,
    UserService,
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(),
    },
  ],
})
export class MessageModule {}
