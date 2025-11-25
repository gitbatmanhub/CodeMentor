import { ConversationType } from '../entities/conversation.schema';

export class CreateConversationMainDto {
  userId: string;
  title: string;
  mode: ConversationType;
  // idConversartionIA: string;

  constructor(
    userId: string,
    title: string,
    mode: ConversationType,
    // idConversartionIA: string,
  ) {
    this.userId = userId;
    this.title = title;
    this.mode = mode;
    // this.idConversartionIA = idConversartionIA;
  }
}

export class MessagesDto {
  usuariosMessage: string;
  createdAt: string;
  iaMessage: string;
}
