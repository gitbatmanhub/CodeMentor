export class CreateConversationMainDto {
  userId: string;
  title: string;
  mode: string;

  constructor(userId: string, title: string, mode: string) {
    this.userId = userId;
    this.title = title;
    this.mode = mode;
  }
}

export class MessagesDto {
  usuariosMessage: string;
  createdAt: string;
  iaMessage: string;
}
