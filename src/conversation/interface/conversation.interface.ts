import { Document } from 'mongoose';

export interface ConversationInterface extends Document {
  readonly usuarioMessage: string;
  readonly iaMessage: string;
}
