import { Module } from '@nestjs/common';
import { QuestionaryService } from './questionary.service';
import { QuestionaryController } from './questionary.controller';

@Module({
  controllers: [QuestionaryController],
  providers: [QuestionaryService],
})
export class QuestionaryModule {}
