import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ChatEntity } from 'src/chat/chat.entity';
import { UserEntity } from 'src/user/user.entity';

@ObjectType()
@Entity('messages')
export class MessageEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Field()
  @Column('text')
  message: string;

  @Field(() => [ChatEntity])
  @ManyToOne(() => ChatEntity, (chat) => chat.messages)
  chat: ChatEntity;

  @Field(() => [UserEntity])
  @ManyToOne(() => UserEntity, (user) => user.id)
  user_from: UserEntity;

  @Field()
  @CreateDateColumn()
  createdAt: Date;
}
