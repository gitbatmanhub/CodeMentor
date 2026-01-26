import { Injectable } from '@nestjs/common';
import { GoogleGenAI } from '@google/genai';

@Injectable()
export class GeminiService {
  private ai: GoogleGenAI;
  private readonly MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

  constructor() {
    this.ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });
  }

  createChat(systemInstruction: string, history: any[] = []) {
    return this.ai.chats.create({
      model: this.MODEL,
      config: { systemInstruction },
      history,
    });
  }
}
