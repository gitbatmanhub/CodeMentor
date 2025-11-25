import { IsOptional, IsString } from 'class-validator';

export class CreateConversationDto {
  @IsString()
  usuarioMessage: string;

  @IsString()
  iaMessage: string;

  constructor(usuarioMessage: string, iaMessage: string) {
    this.usuarioMessage = usuarioMessage;
    this.iaMessage = iaMessage;
  }
}
