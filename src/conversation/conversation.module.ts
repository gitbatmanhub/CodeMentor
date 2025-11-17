import { Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { ConversationController } from './conversation.controller';
import { ConversationProvider } from './conversation.provider';
import { MongodbModule } from '../mongodb/mongodb.module';

@Module({
  imports: [MongodbModule],
  controllers: [ConversationController],
  providers: [ConversationService, ...ConversationProvider],
  exports: [ConversationService],
})
export class ConversationModule {}
