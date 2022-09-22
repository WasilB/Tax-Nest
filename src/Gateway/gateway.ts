import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

@WebSocketGateway()
export class ChatGateway {
  @SubscribeMessage('message')
  response(@MessageBody() message: string) {
    console.log('DataBase Updated!!!', message);
  }
}
