import * as process from 'node:process';

import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Chat, GoogleGenAI } from '@google/genai';

import { ConversationService } from '../conversation/conversation.service';
import { CreateConversationDto } from '../conversation/dto/create-conversation.dto';
import { CreateConversationMainDto } from '../conversation/dto/create-conversation-main.dto';
import { MessageDto } from './dto/message.dto';
import { User } from '../auth/entities/user.entity';
import { DataQuestionnaireDto } from './dto/answer-question-encuesta.dto';
import { ProfileUserDto } from '../auth/dto/profile-user.dto';
import { ProfileService } from '../profile/profile.service';

@Injectable()
export class GeminiProfileService {
  private ai: GoogleGenAI;
  private chat: Chat;
  private readonly MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

  constructor(private readonly profileService: ProfileService) {
    // 2. Inicialización del cliente de Gemini
    this.ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });
  }

  async createPerfilAI(
    userId: string,
    responses: DataQuestionnaireDto,
  ): Promise<ProfileUserDto> {
    const systemPrompt = `
    Eres un Analista Educativo especializado en interpretar cuestionarios para crear perfiles descriptivos de estudiantes jóvenes.

Tu rol:
- Analizar respuestas de encuestas y transformarlas en un perfil educativo completo.
- Identificar estilo cognitivo, motivación, hábitos, intereses y fortalezas.
- Señalar áreas de mejora sin emitir diagnósticos psicológicos, clínicos o médicos.
- Ser empático, profesional y orientado al desarrollo personal.
- Redactar de forma clara, constructiva y sin juicios negativos.
- Mantener estrictamente la información dentro de lo que indiquen las respuestas.
- Tu salida SIEMPRE debe ser un JSON válido con los siguientes campos:
Reglas adicionales:
- El perfil del joven debe ser descriptivo y educativo, no clinico, ademas debes hacerlo con el fin que el lo lea en un perfil.
- No usar frases como “este joven”, “el estudiante”, “la persona evaluada”.
- No inventes información no sustentada por las respuestas.
- No uses lenguaje clínico (“ansiedad”, “déficit”, “trastorno”).
- No descalifiques al estudiante.
- Prioriza conclusiones educativas.


    
    `;

    const userPrompt = `
Quiero que generes el perfil educativo descriptivo de un joven basándote ÚNICAMENTE en las respuestas del cuestionario que te enviaré.

Debes analizar lo que cada respuesta implica sobre:
- forma de aprender,
- motivación,
- intereses académicos,
- fortalezas personales,
- posibles áreas de mejora (sin lenguaje clínico).

El resultado debe respetar estrictamente la siguiente estructura JSON No incluyas json, o cualquier formato de bloque de código, la respuesta debe ser estricatamente un json, Bajo ningun contexto agregues código antes o despues del JSON como por ejemplo "'''json...'":

{
  "perfilDelJoven": "",
  "fortalezasIdentificadas": [{}, {}. {}, ...etc],
  "areasADesarrollar": [{}, {}. {}, ...etc],
  "recomendacionesPersonalizadas": [{}, {}. {}, ...etc]
}



Aquí tienes el objeto con las preguntas y respuestas del estudiante:
        ${JSON.stringify(responses, null, 2)}

      `;

    const chat = this.ai.chats.create({
      model: this.MODEL,
      config: {
        systemInstruction: systemPrompt,
      },
    });

    const rawResponse = await chat.sendMessage({ message: userPrompt });

    console.log('Raw response from Gemini:', rawResponse.text);
    // 4. Intentar parsear el JSON que devuelve Gemini
    let parsed: ProfileUserDto;

    try {
      parsed = JSON.parse(rawResponse.text);
    } catch (error) {
      console.error(
        `Error al parsear respuesta del modelo: ${error}`,
        rawResponse,
      );
      throw new InternalServerErrorException(
        'El modelo devolvió una respuesta inválida.',
      );
    }

    await this.profileService.createProfile(userId, parsed);

    return parsed;
  }
}
