import { Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { ConversationController } from './conversation.controller';
import { ConversationProvider } from './conversation.provider';
import { MongodbModule } from '../mongodb/mongodb.module';
import { TemarioModule } from '../temario/temario.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [MongodbModule, TemarioModule, AuthModule],
  controllers: [ConversationController],
  providers: [ConversationService, ...ConversationProvider],
  exports: [ConversationService],
})
export class ConversationModule {}
