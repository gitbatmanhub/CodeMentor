import * as mongoose from 'mongoose';

export const ConversationSchema = new mongoose.Schema({
  usuarioMessage: String,
  iaMessage: String,
});

export const usuarioSchema = new mongoose.Schema({
  _id: String,
  userId: String,
  title: String,
  createdAt: String,
  updatedAt: String,
  messages: [
    {
      role: String,
      content: String,
      timestamp: String,
    },
  ],
});

export interface Conversation extends Document {
  readonly usuarioMessage: string;
  readonly iaMessage: string;
}
