import { InputType } from '@nestjs/graphql';
import { IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class ResponseQuestionaryDto {
  @IsNumber()
  questionId: number;
  @IsNumber()
  selectedOptionId: number;
}

export class ResponsesQuestionaryDto {
  @ValidateNested({ each: true })
  @Type(() => ResponseQuestionaryDto)
  answers: ResponseQuestionaryDto[];
}
