import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestionaryService } from './questionary.service';
import { CreateQuestionaryDto } from './dto/create-questionary.dto';
import { UpdateQuestionaryDto } from './dto/update-questionary.dto';

@Controller('questionary')
export class QuestionaryController {
  constructor(private readonly questionaryService: QuestionaryService) {}

  @Post()
  create(@Body() createQuestionaryDto: CreateQuestionaryDto) {
    return this.questionaryService.create(createQuestionaryDto);
  }

  @Get()
  findAll() {
    return this.questionaryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionaryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuestionaryDto: UpdateQuestionaryDto) {
    return this.questionaryService.update(+id, updateQuestionaryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionaryService.remove(+id);
  }
}
