import {
  Resolver,
  Mutation,
  Args,
  Context,
  Query,
  Subscription,
} from '@nestjs/graphql';
import { PubSubEngine } from 'graphql-subscriptions';
import { MessageService } from './message.service';
import { SendMessageInput } from './dto/message.inputs';
import { UseGuards, Inject } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { UserEntity } from 'src/user/user.entity';
import { CurrentUser } from '../user/user.decorator';
import { MessageEntity } from './message.entity';
import { ChatService } from 'src/chat/chat.service';
import { pubsub } from '../lib/pubsub';

@Resolver('Message')
export class MessageResolver {
  constructor(
    private messageService: MessageService,
    private chatService: ChatService,
  ) {}

  @Mutation('sendMessage')
  @UseGuards(new AuthGuard())
  async sendMessage(
    @Args('input') input: SendMessageInput,
    @CurrentUser() user_from: UserEntity,
  ) {
    const message = await this.messageService.createMessage({
      ...input,
      user_from,
    });
    const chat = await this.chatService.getMyChat(input.chat_id);

    pubsub.publish('messageSent', { messageSent: message });
    pubsub.publish('chatUpdated', { chatUpdated: chat });
    return message;
  }

  @Subscription(() => MessageEntity, {
    filter: (payload: any, variables: any) => {
      return payload.messageSent.chat.id === variables.chatId;
    },
  })
  messageSent(@Args('chatId') chatId: string) {
    return pubsub.asyncIterator('messageSent');
  }
}
