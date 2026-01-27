import { CreateConversationDto } from '../conversation/dto/create-conversation.dto';
import { Injectable } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { ConversationService } from '../conversation/conversation.service';
import { TemarioService } from '../temario/temario.service';
import { MessageDto } from './dto/message.dto';
import { User } from '../auth/entities/user.entity';
import { CreateConversationMainDto } from '../conversation/dto/create-conversation-main.dto';
import { ProfileService } from '../profile/profile.service';

export interface responseInterface {
  text: string;
  idConversationMain: string;
}

@Injectable()
export class TutorService {
  constructor(
    private readonly geminiService: GeminiService,
    private readonly conversationService: ConversationService,
    private readonly temarioService: TemarioService,
    private readonly profileService: ProfileService,
  ) {}

  private buildSystemInstruction(tema: string, perfil: string): string {
    return `
Eres un tutor experto y amigable en programación.

Perfil del estudiante:
${perfil}

Tema actual:
${tema}

Reglas:
- Máx. 100 palabras
- Solo programación en typescript
- Adapta el nivel
- Si cambia de tema: 
  "Mi función es ayudarte a aprender programación. Volvamos al tema."
`;
  }

  async responder(body: MessageDto, user: User) {
    const { idTemaConversacion, idConversationMain } = body;
    const tema = await this.temarioService.findTemaById(idTemaConversacion);

    const perfil = await this.profileService.findOne(user.id);

    const conversation = body.idConversationMain
      ? await this.conversationService.findOneConversationMain(
          body.idTemaConversacion,
          body.userId,
        )
      : await this.conversationService.createConversationMain(
          new CreateConversationMainDto(
            user.id,
            tema.descripcion,
            body.mode,
            tema.idTema,
          ),
        );

    const history = this.mapHistoryToGeminiFormat(conversation);

    const systemInstruction = this.buildSystemInstruction(
      tema.descripcion,
      perfil.perfilDelJoven,
    );

    const chat = this.geminiService.createChat(systemInstruction, history);

    const response = await chat.sendMessage({ message: body.message });

    await this.conversationService.updateConversationMain(
      conversation.id,
      new CreateConversationDto(body.message, response.text),
    );

    const respuesta: responseInterface = {
      text: response.text,
      idConversationMain: conversation.id,
    };
    return respuesta;
  }

  mapHistoryToGeminiFormat(conversationDocument: any): any[] {
    // Aseguramos que haya un documento y un array de mensajes
    if (
      !conversationDocument ||
      !conversationDocument.messages ||
      conversationDocument.messages.length === 0
    ) {
      return []; // Devolvemos un array vacío si no hay historial
    }

    const historyForGemini: any[] = [];

    // Iteramos sobre el array de mensajes
    conversationDocument.messages.forEach((msg: any) => {
      // 1. Mensaje del Usuario
      // Verificamos que el mensaje exista antes de agregarlo
      if (msg.usuarioMessage) {
        historyForGemini.push({
          // El rol para el usuario es 'user'
          role: 'user',
          parts: [{ text: msg.usuarioMessage }],
        });
      }

      // 2. Respuesta de la IA
      // Verificamos que el mensaje exista antes de agregarlo
      if (msg.iaMessage) {
        historyForGemini.push({
          // El rol para la respuesta del modelo es 'model'
          role: 'model',
          parts: [{ text: msg.iaMessage }],
        });
      }
    });

    return historyForGemini;
  }
}
