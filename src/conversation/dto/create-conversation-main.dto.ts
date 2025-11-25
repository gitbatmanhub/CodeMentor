export class CreateConversationMainDto {
  userId: string;
  title: string;
  mode: string;
  // idConversartionIA: string;

  constructor(
    userId: string,
    title: string,
    mode: string,
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
