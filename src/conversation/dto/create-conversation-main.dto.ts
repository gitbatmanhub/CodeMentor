export class CreateConversationMainDto {
  userId: string;
  title: string;

  constructor(userId: string, title: string) {
    this.userId = userId;
    this.title = title;
  }
}

export class MessagesDto {
  usuariosMessage: string;
  createdAt: string;
  iaMessage: string;
}
