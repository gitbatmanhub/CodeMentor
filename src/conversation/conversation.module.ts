import { Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { ConversationController } from './conversation.controller';
import { ConversationProvider } from './conversation.provider';
import { MongodbModule } from '../mongodb/mongodb.module';
import { TemarioModule } from '../temario/temario.module';

@Module({
  imports: [MongodbModule, TemarioModule],
  controllers: [ConversationController],
  providers: [ConversationService, ...ConversationProvider],
  exports: [ConversationService],
})
export class ConversationModule {}
