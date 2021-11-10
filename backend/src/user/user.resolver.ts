import {
  Mutation,
  Args,
  Context,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { UnprocessableEntityException, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { SignUpInput, SignInInput } from './dto/auth.inputs';
import { User } from '../graphql';
import { AuthGuard } from '../guards/auth.guard';
import { UserEntity } from './user.entity';
import { CurrentUser } from './user.decorator';
import { pubsub } from '../lib/pubsub';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query()
  @UseGuards(new AuthGuard())
  me(@CurrentUser() user: UserEntity) {
    return user;
  }

  @Query()
  @UseGuards(new AuthGuard())
  getNewUsers() {
    return this.userService.newUsers();
  }

  @Query()
  @UseGuards(new AuthGuard())
  searchUser(@Args('name') name: string) {
    return this.userService.findByName(name);
  }

  @Mutation()
  async signIn(@Args('input') signInInput: SignInInput) {
    const user = await this.userService.signIn({ ...signInInput });

    if (user) {
      return this.userService.createToken(user);
    } else {
      throw new UnprocessableEntityException('Invalid credentials 🤥');
    }
  }

  @Mutation()
  async signUp(
    @Args('input') signUpInput: SignUpInput,
    @Args('file') file: any,
  ) {
    const _file = await file;
    const user = await this.userService.createUser(
      { ...signUpInput },
      _file.file,
    );
    pubsub.publish('userRegistred', { userRegistred: user });
    return this.userService.createToken(user);
  }

  @Subscription(() => UserEntity)
  userRegistred() {
    return pubsub.asyncIterator('userRegistred');
  }
}
