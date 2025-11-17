import { Module } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { GeminiController } from './gemini.controller';
import { LiccyHuman } from './liccyHuman';
import { MongodbModule } from '../mongodb/mongodb.module';
import { ConversationModule } from '../conversation/conversation.module';

@Module({
  controllers: [GeminiController],
  providers: [GeminiService, LiccyHuman],
  imports: [MongodbModule, ConversationModule],
})
export class GeminiModule {}
