import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateConversationDto {
  @IsString()
  usuarioMessage: string;

  @IsString()
  iaMessage: string;

  @IsOptional()
  @IsString()
  idConversation: string;

  constructor(
    usuarioMessage: string,
    iaMessage: string,
    idConversation: string | null,
  ) {
    this.usuarioMessage = usuarioMessage;
    this.iaMessage = iaMessage;
    this.idConversation = idConversation || null;
  }
}
