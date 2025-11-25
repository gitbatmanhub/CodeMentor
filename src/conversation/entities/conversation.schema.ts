import * as mongoose from 'mongoose';

export enum ConversationType {
  Tutor = 'Tutor',
  Libre = 'Libre',
}

export const ConversationSchema = new mongoose.Schema({
  usuarioMessage: String,
  iaMessage: String,
});

export const ConversationMain = new mongoose.Schema({
  userId: { type: String, required: true },
  title: String,

  mode: {
    type: String,
    enum: Object.values(ConversationType),
    default: ConversationType.Libre,
  },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },

  messages: [
    {
      usuarioMessage: String,
      iaMessage: String,
      createdAt: { type: Date, default: Date.now },
    },
  ],
});
