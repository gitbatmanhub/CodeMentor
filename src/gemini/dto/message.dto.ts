import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { ConversationType } from '../../conversation/entities/conversation.schema';

export class MessageDto {
  @IsString()
  message: string;

  @IsString()
  userId: string;

  @IsOptional()
  @IsString()
  idConversationMain: string;

  @IsOptional()
  @IsString()
  temaConversation: string;

  @IsOptional()
  @IsUUID()
  idTemaConversacion: string;

  @IsOptional()
  @IsEnum(ConversationType)
  mode: ConversationType = ConversationType.Libre;
}
