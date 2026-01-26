import { ConversationType } from '../entities/conversation.schema';

export class CreateConversationMainDto {
  userId: string;
  title: string;
  mode: ConversationType;
  idTemaConversacion: string;

  constructor(
    userId: string,
    title: string,
    mode: ConversationType,
    idTemaConversacion: string,
  ) {
    this.userId = userId;
    this.title = title;
    this.mode = mode;
    this.idTemaConversacion = idTemaConversacion;
  }
}

export class MessagesDto {
  usuariosMessage: string;
  createdAt: string;
  iaMessage: string;
}
