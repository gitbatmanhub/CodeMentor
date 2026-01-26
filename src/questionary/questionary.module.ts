import { Module } from '@nestjs/common';
import { QuestionaryService } from './questionary.service';
import { QuestionaryController } from './questionary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionEntity } from './entities/question.entity';
import { OptionEntity } from './entities/option.entity';
import { AuthModule } from '../auth/auth.module';
import { GeminiModule } from '../gemini/gemini.module';
import { ProfileModule } from '../profile/profile.module';
import { ProfileService } from '../profile/profile.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([OptionEntity, QuestionEntity]),
    AuthModule,
    GeminiModule,
    ProfileModule,
  ],
  controllers: [QuestionaryController],
  providers: [QuestionaryService, ProfileService],
  exports: [QuestionaryService, TypeOrmModule],
})
export class QuestionaryModule {}
