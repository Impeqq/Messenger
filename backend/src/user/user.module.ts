import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { FileService } from 'src/file/file.service';
import { FileEntity } from 'src/file/file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, FileEntity])],
  providers: [UserResolver, UserService, FileService],
})
export class UserModule {}
