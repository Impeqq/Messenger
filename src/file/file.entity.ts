import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity('file')
export class FileEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  filename: string;

  @Field()
  @Column('bytea')
  data: Uint8Array;
}
