import * as mongoose from 'mongoose';

export const ConversationSchema = new mongoose.Schema({
  usuarioMessage: String,
  iaMessage: String,
});

export const ConversationMain = new mongoose.Schema({
  userId: String,
  title: String,
  createdAt: String,
  updatedAt: String,
  messages: [
    {
      usuarioMessage: String,
      iaMessage: String,
      createdAt: String,
    },
  ],
});

export interface Conversation extends Document {
  readonly usuarioMessage: string;
  readonly iaMessage: string;
}
