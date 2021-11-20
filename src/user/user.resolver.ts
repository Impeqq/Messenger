import { Mutation, Args, Query, Resolver, Subscription } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { SignUpInput, SignInInput } from './dto/auth.inputs';
import { AuthGuard } from '../guards/auth.guard';
import { UserEntity } from './user.entity';
import { CurrentUser } from './user.decorator';
import { pubsub } from '../lib/pubsub';
import { FileUpload } from 'graphql-upload';
import { UpdateInput, UpdatePasswordInput } from './dto/update.inputs';

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
    return await this.userService.signIn({ ...signInInput });
  }

  @Mutation()
  async signUp(@Args('input') signUpInput: SignUpInput) {
    const user = await this.userService.createUser({ ...signUpInput });
    pubsub.publish('userRegistred', { userRegistred: user });
    return this.userService.createToken(user);
  }

  @Mutation()
  @UseGuards(new AuthGuard())
  async updateUser(
    @Args('input') input: UpdateInput,
    @Args('file') file: { file: FileUpload },
    @CurrentUser() user: UserEntity,
  ) {
    const _file = await file;
    return await this.userService.updateUser(
      user.id,
      { ...input },
      _file?.file,
    );
  }

  @Mutation()
  @UseGuards(new AuthGuard())
  async updatePassword(
    @Args('input') input: UpdatePasswordInput,
    @CurrentUser() user: UserEntity,
  ) {
    return await this.userService.updatePassword(user.id, { ...input });
  }

  @Subscription(() => UserEntity)
  userRegistred() {
    return pubsub.asyncIterator('userRegistred');
  }

  @Subscription(() => String)
  userOnline() {
    return pubsub.asyncIterator('userOnline');
  }
}
