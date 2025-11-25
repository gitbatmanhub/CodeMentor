import { IsOptional, IsString } from 'class-validator';

export class MessageDto {
  @IsString()
  message: string;

  @IsString()
  userId: string;

  @IsOptional()
  @IsString()
  idConversationMain: string;
}
