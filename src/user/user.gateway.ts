import {
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { UserService } from './user.service';
import { pubsub } from 'src/lib/pubsub';

@WebSocketGateway(5001, { cors: true })
export class UserGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('UserGateway');
  constructor(private userService: UserService) {}

  afterInit() {
    this.logger.log('Init');
  }

  handleDisconnect(client: Socket) {
    const user_id = client.request.url.split('user_id=')[1].split('&')[0];
    this.userService.setOnlineStatus(false, user_id);
    pubsub.publish('userOnline', {
      userOnline: { id: user_id, online: false },
    });
    this.logger.log(`Client disconnected: ${user_id}`);
  }

  handleConnection(client: Socket) {
    const user_id = client.request.url.split('user_id=')[1].split('&')[0];
    this.userService.setOnlineStatus(true, user_id);
    pubsub.publish('userOnline', { userOnline: { id: user_id, online: true } });
    this.logger.log(`Client connected: ${user_id}`);
  }
}
