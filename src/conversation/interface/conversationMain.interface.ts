import { Document } from 'mongoose';

export interface ConversationMainInterface extends Document {
  userId: string;
  title: string;
  mode: string;
  createdAt: string;
  updatedAt: string;
  messages: [messageInterface];
}

export interface messageInterface extends Document {
  usuarioMessage: string;
  iaMessage: string;
  createdAt: Date;
}
