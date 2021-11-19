import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MessageUpdates {
  @Field()
  messagesUpdated: {
    chat_id: string;
    message_ids: string[];
  };
}
