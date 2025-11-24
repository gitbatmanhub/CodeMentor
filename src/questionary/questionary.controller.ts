import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuestionaryService } from './questionary.service';
import { CreateQuestionaryDto } from './dto/create-questionary.dto';
import { UpdateQuestionaryDto } from './dto/update-questionary.dto';
import { QuestionEntity } from './entities/question.entity';

@Controller('questionary')
export class QuestionaryController {
  constructor(private readonly questionaryService: QuestionaryService) {}

  @Get()
  async getAllMessages(): Promise<QuestionEntity[]> {
    return await this.questionaryService.findAll();
  }
}
