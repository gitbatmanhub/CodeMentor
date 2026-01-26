import { Module } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { GeminiController } from './gemini.controller';
import { LiccyHuman } from './liccyHuman';
import { MongodbModule } from '../mongodb/mongodb.module';
import { ConversationModule } from '../conversation/conversation.module';
import { GeminiProfileService } from './gemini.profile.service';
import { ProfileModule } from '../profile/profile.module';
import { AuthModule } from '../auth/auth.module';
import { TemarioModule } from '../temario/temario.module';
import { TemarioService } from '../temario/temario.service';
import { TutorService } from './tutor.service';

@Module({
  controllers: [GeminiController],
  imports: [
    MongodbModule,
    AuthModule,
    ConversationModule,
    ProfileModule,
    TemarioModule,
  ],
  providers: [GeminiService, LiccyHuman, GeminiProfileService, TutorService],
  exports: [GeminiService, GeminiProfileService, MongodbModule],
})
export class GeminiModule {}
