import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ProductsModule } from '../products/products.module';
import { AuthModule } from '../auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { QuestionaryModule } from '../questionary/questionary.module';
import { TemarioModule } from '../temario/temario.module';
import { ProjectsModule } from '../projects/projects.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    ProductsModule,
    AuthModule,
    PassportModule,
    QuestionaryModule,
    TemarioModule,
    ProjectsModule,
  ],
})
export class SeedModule {}
