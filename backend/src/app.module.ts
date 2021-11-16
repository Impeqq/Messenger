import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';
import { ChatModule } from './chat/chat.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: { path: join(process.cwd(), 'src/graphql.ts') },
      installSubscriptionHandlers: true,
      // context: ({ req }) => ({ header: req.headers }), ДО
      context: ({ req }) => ({ ...req }),
      uploads: false,
    }),
    TypeOrmModule.forRoot(),
    UserModule,
    MessageModule,
    ChatModule,
    FileModule,
  ],
  providers: [AppService],
})
export class AppModule {}
