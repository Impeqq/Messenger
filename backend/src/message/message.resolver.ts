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
import { MessageUpdates } from './dto/message-updates';

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

  @Mutation('setMessagesRead')
  @UseGuards(new AuthGuard())
  async setMessagesRead(
    @Args('message_ids') message_ids: string[],
    @Args('chat_id') chat_id: string,
  ) {
    await this.messageService.setMessagesRead(message_ids);
    pubsub.publish('messagesUpdated', {
      messagesUpdated: {
        chat_id,
        message_ids,
      },
    });
    return true;
  }

  @Subscription(() => MessageUpdates, {
    filter: (payload: any, variables: any) => {
      return payload.messagesUpdated.chat_id === variables.chat_id;
    },
  })
  messagesUpdated() {
    return pubsub.asyncIterator('messagesUpdated');
  }

  @Subscription(() => MessageEntity, {
    filter: (payload: any, variables: any) => {
      return payload.messageSent.chat.id === variables.chat_id;
    },
  })
  messageSent() {
    return pubsub.asyncIterator('messageSent');
  }
}
