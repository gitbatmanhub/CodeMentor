import { Module } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { GeminiController } from './gemini.controller';
import { LiccyHuman } from './liccyHuman';
import { MongodbModule } from '../mongodb/mongodb.module';
import { ConversationModule } from '../conversation/conversation.module';
import { GeminiProfileService } from './gemini.profile.service';
import { ProfileModule } from '../profile/profile.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [GeminiController],
  providers: [GeminiService, LiccyHuman, GeminiProfileService],
  imports: [MongodbModule, AuthModule, ConversationModule, ProfileModule],
  exports: [GeminiService, GeminiProfileService, MongodbModule],
})
export class GeminiModule {}
