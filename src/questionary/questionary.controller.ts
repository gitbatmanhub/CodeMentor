import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { QuestionaryService } from './questionary.service';
import { QuestionEntity } from './entities/question.entity';
import { ResponsesQuestionaryDto } from './dto/response-questionary.dto';
import { Auth, GetUserREST } from '../auth/decorators';
import { User } from '../auth/entities/user.entity';

@Auth()
@Controller('questionary')
export class QuestionaryController {
  constructor(private readonly questionaryService: QuestionaryService) {}

  @Get()
  async getAllMessages(): Promise<QuestionEntity[]> {
    return await this.questionaryService.findAll();
  }

  @Post()
  createProfile(
    @Body() responsesQuestionaryDto: ResponsesQuestionaryDto,
    @GetUserREST() user: User,
  ) {
    console.log(responsesQuestionaryDto);
    return this.questionaryService.generateProfile(
      user,
      responsesQuestionaryDto,
    );
  }
}
