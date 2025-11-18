import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionEntity } from './entities/question.entity';
import { Repository } from 'typeorm';
import { OptionEntity } from './entities/option.entity';
import { initialData } from '../seed/data/seed';

@Injectable()
export class QuestionaryService {
  constructor(
    @InjectRepository(QuestionEntity)
    private readonly questionRepository: Repository<QuestionEntity>,
    @InjectRepository(OptionEntity)
    private readonly optionRepository: Repository<OptionEntity>,
  ) {}

  async seed() {
    const question = initialData.questions;

    for (const q of question) {
      const question = this.questionRepository.create({
        text: q.question_text,
        options: q.options,
      });

      const savedQuestion = await this.questionRepository.save(question);

      for (const opt of q.options) {
        const option = this.optionRepository.create({
          text: opt.option_text,
          value: opt.score,
          question: opt,
          option_label: opt.option_label,
          profile_hint: opt.profile_hint,
        });
        await this.optionRepository.save(option);
      }
    }
  }
}
