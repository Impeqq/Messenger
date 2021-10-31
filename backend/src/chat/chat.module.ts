import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ChatEntity } from './chat.entity';
import { ChatService } from './chat.service';
import { ChatResolver } from './chat.resolver';
import { UserEntity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { MessageEntity } from 'src/message/message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatEntity, UserEntity, MessageEntity])],
  providers: [ChatResolver, ChatService, UserService],
})
export class ChatModule {}
