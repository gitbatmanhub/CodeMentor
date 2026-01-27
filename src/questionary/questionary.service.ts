import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionEntity } from './entities/question.entity';
import { Repository } from 'typeorm';
import { OptionEntity } from './entities/option.entity';
import { initialData } from '../seed/data/seed';
import { ResponsesQuestionaryDto } from './dto/response-questionary.dto';
import { DataQuestionnaireDto } from '../gemini/dto/answer-question-encuesta.dto';
import { GeminiService } from '../gemini/gemini.service';
import { GeminiProfileService } from '../gemini/gemini.profile.service';
import { User } from '../auth/entities/user.entity';
import { ProfileService } from '../profile/profile.service';

@Injectable()
export class QuestionaryService {
  constructor(
    @InjectRepository(QuestionEntity)
    private readonly questionRepository: Repository<QuestionEntity>,
    @InjectRepository(OptionEntity)
    private readonly optionRepository: Repository<OptionEntity>,
    private geminiService: GeminiService,
    private geminiProfileService: GeminiProfileService,
    private profileService: ProfileService,
  ) {}

  createSeed() {
    const questionsSeed = initialData.questions;

    for (const q of questionsSeed) {
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

  async generateProfile(
    user: User,
    responsesQuestionaryDto: ResponsesQuestionaryDto,
  ) {
    const answers = [];

    for (const item of responsesQuestionaryDto.answers) {
      const question = await this.questionRepository.findOne({
        where: { idQuestion: item.questionId },
      });

      const option = await this.optionRepository.findOne({
        where: { idOption: item.selectedOptionId },
      });

      if (!question || !option) continue;

      answers.push({
        question: question.question_text,
        answer: option.option_text,
      });
    }

    const dataQuestionnaire: DataQuestionnaireDto = {
      questionnaireData: answers,
    };

    return this.geminiProfileService.createPerfilAI(user.id, dataQuestionnaire);
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
