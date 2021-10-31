import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
  Column,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { UserEntity } from 'src/user/user.entity';
import { MessageEntity } from 'src/message/message.entity';

@ObjectType()
@Entity('chat')
export class ChatEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => [UserEntity])
  @Column({ type: 'simple-array', nullable: true })
  @JoinTable()
  @ManyToMany(() => UserEntity, (user) => user.chats)
  users: UserEntity[];

  @Field(() => [MessageEntity])
  @OneToMany(() => MessageEntity, (message) => message.chat)
  messages: MessageEntity[];

  @Field()
  @CreateDateColumn()
  createdAt: Date;
}
