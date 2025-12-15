import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { initialData } from './data/seed';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../auth/entities/user.entity';
import { Repository } from 'typeorm';
import { QuestionaryService } from '../questionary/questionary.service';
import { TemarioService } from '../temario/temario.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly questionaryService: QuestionaryService,
    private readonly authService: AuthService,
    private readonly temarioService: TemarioService,
  ) {}

  async runSeed() {
    await this.deleteAllTables();
    await this.insertAllIntables();
    return 'Seed executed';
  }

  private async insertAllIntables() {
    await this.questionaryService.createSeed();
    await this.temarioService.createSeed();
    await this.authService.insertUsersFromSeed();
  }

  private async deleteAllTables() {
    await this.questionaryService.deleteAll();
    await this.temarioService.deleteAll();
  }
}
