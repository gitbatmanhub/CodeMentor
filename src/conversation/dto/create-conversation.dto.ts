export class CreateConversationDto {
  usuarioMessage: string;
  iaMessage: string;

  constructor(usuarioMessage: string, iaMessage: string) {
    this.usuarioMessage = usuarioMessage;
    this.iaMessage = iaMessage;
  }
}
