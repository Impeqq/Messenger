import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SignUpInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}

@InputType()
export class SignInInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
