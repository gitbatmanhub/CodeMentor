import { Module } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { GeminiController } from './gemini.controller';
import { LiccyHuman } from './liccyHuman';

@Module({
  controllers: [GeminiController],
  providers: [GeminiService, LiccyHuman],
})
export class GeminiModule {}
