import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ChatEntity } from './chat.entity';
import { ChatService } from './chat.service';
import { ChatResolver } from './chat.resolver';
import { UserEntity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { MessageEntity } from 'src/message/message.entity';
import { FileEntity } from 'src/file/file.entity';
import { FileService } from 'src/file/file.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ChatEntity,
      UserEntity,
      MessageEntity,
      FileEntity,
    ]),
  ],
  providers: [ChatResolver, ChatService, UserService, FileService],
})
export class ChatModule {}
