import { IsString } from 'class-validator';

export class ConversationTableDto {
  @IsString()
  TableName: string = 'ConversationTableDto';

  Item: DataConversation;
}

export class DataConversation {
  @IsString()
  mesage: string;
  iaResponse: string;
}
