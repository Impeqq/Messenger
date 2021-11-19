import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SendMessageInput {
  @Field()
  chat_id: string;

  @Field()
  message: string;
}
