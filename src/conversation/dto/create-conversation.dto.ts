import { IsOptional, IsString } from 'class-validator';

export class CreateConversationDto {
  @IsString()
  usuarioMessage: string;

  @IsString()
  iaMessage: string;

  @IsString()
  mode: string;

  constructor(usuarioMessage: string, iaMessage: string, mode: string) {
    this.usuarioMessage = usuarioMessage;
    this.iaMessage = iaMessage;
    this.mode = mode;
  }
}
