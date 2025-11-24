import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionEntity } from './entities/question.entity';
import { Repository } from 'typeorm';
import { OptionEntity } from './entities/option.entity';
import { initialData } from '../seed/data/seed';
import { ProductsService } from '../products/products.service';

@Injectable()
export class QuestionaryService {
  constructor(
    @InjectRepository(QuestionEntity)
    private readonly questionRepository: Repository<QuestionEntity>,
    @InjectRepository(OptionEntity)
    private readonly optionRepository: Repository<OptionEntity>,
  ) {}

  create(createQuestionaryDto: any) {
    return 'This action adds a new questionary';
  }

  createSeed() {
    const questionsSeed = initialData.questions;

    for (const q of questionsSeed) {
      console.log(q.question_text);
      const question = new QuestionEntity();
      question.question_text = q.question_text;

      question.options = q.options.map((opt) => {
        const option = new OptionEntity();
        option.option_label = opt.option_label;
        option.option_text = opt.option_text;
        option.score = opt.score;
        option.profile_hint = opt.profile_hint;
        return option;
      });

      this.questionRepository.save(question);
    }
  }

  async deleteAll() {
    const queryBuilder =
      this.questionRepository.createQueryBuilder('questionary');
    try {
      return await queryBuilder.delete().where({}).execute();
    } catch (e) {
      return this.handlerDbException(e);
    }
  }

  private handlerDbException(error: any) {
    if (error.code === '23505') {
      console.error(`Error: ${error.message}`);
      throw new InternalServerErrorException(error.detail);
    }
    console.error(`Error: ${error.message}`);
    throw new InternalServerErrorException(error.message);
  }

  async findAll(): Promise<QuestionEntity[]> {
    return await this.questionRepository.find({
      relations: ['options'],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} questionary`;
  }

  update(id: number, updateQuestionaryDto: any) {
    return `This action updates a #${id} questionary`;
  }

  remove(id: number) {
    return `This action removes a #${id} questionary`;
  }
}
