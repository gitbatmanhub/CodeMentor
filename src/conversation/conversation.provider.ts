import { Connection } from 'mongoose';
import {
  ConversationMain,
  ConversationSchema,
} from './entities/conversation.schema';

export const ConversationProvider = [
  {
    provide: 'ConversationModel',
    useFactory: (connection: Connection) =>
      connection.model('Conversation', ConversationSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'ConversationMainModel',
    useFactory: (connection: Connection) =>
      connection.model('ConversationMain', ConversationMain),
    inject: ['DATABASE_CONNECTION'],
  },
];
