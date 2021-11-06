import { Resolver, Query, Args, Mutation, Subscription } from '@nestjs/graphql';

import { ChatService } from './chat.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { UserEntity } from 'src/user/user.entity';
import { CurrentUser } from '../user/user.decorator';
import { MessageEntity } from 'src/message/message.entity';
import { pubsub } from '../lib/pubsub';

@Resolver('Chat')
export class ChatResolver {
  constructor(private chatService: ChatService) {}

  @Query()
  @UseGuards(new AuthGuard())
  getChat(
    @Args('id') id: string,
    @Args('limit') limit: number,
    @Args('offset') offset: number,
    @CurrentUser() user: UserEntity,
  ) {
    return this.chatService.getChatByIdWithMessages(id, limit, offset, user);
  }

  @Query()
  @UseGuards(new AuthGuard())
  getMyChats(@CurrentUser() user: UserEntity) {
    return this.chatService.getMyChats(user);
  }

  @Mutation()
  @UseGuards(new AuthGuard())
  async createChat(
    @Args('user_to') user_to: string,
    @CurrentUser() user: UserEntity,
  ) {
    return await this.chatService.createChat(user_to, user);
  }

  @Subscription(() => MessageEntity, {
    filter: (payload: any, variables: any) => {
      return payload.chatUpdated.users.filter((user) => {
        return user.id === variables.user_id;
      }).length;
    },
  })
  chatUpdated(@Args('user_id') user_id: string) {
    return pubsub.asyncIterator('chatUpdated');
  }
}
