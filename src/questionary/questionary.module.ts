import { Module } from '@nestjs/common';
import { QuestionaryService } from './questionary.service';
import { QuestionaryController } from './questionary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionEntity } from './entities/question.entity';
import { OptionEntity } from './entities/option.entity';
import { AuthModule } from '../auth/auth.module';
import { GeminiModule } from '../gemini/gemini.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([OptionEntity, QuestionEntity]),
    AuthModule,
    GeminiModule,
  ],
  controllers: [QuestionaryController],
  providers: [QuestionaryService],
  exports: [QuestionaryService, TypeOrmModule],
})
export class QuestionaryModule {}
