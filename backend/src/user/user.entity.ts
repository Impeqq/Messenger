import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  CreateDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ChatEntity } from 'src/chat/chat.entity';
import { FileEntity } from 'src/file/file.entity';

@ObjectType()
@Entity('users')
export class UserEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column('text', { unique: true })
  email: string;

  @Field()
  @Column('varchar')
  password: string;

  @Field()
  @Column('text')
  firstName: string;

  @Field()
  @Column('text')
  lastName: string;

  @OneToOne(() => FileEntity)
  @JoinColumn()
  avatar?: FileEntity;

  @ManyToMany(() => ChatEntity, (chat) => chat.users)
  chats: ChatEntity[];

  @Field()
  @CreateDateColumn()
  createdAt: Date;
}
