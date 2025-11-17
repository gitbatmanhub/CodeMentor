import { Connection } from 'mongoose';
import { ConversationSchema } from './entities/conversation.schema';

export const ConversationProvider = [
  {
    provide: 'ConversationModel',
    useFactory: (connection: Connection) =>
      connection.model('Conversation', ConversationSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
