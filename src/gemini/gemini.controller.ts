import { Body, Controller, Get, Post } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { MessageDto } from './dto/message.dto';
import { ConversationInterface } from '../conversation/interface/conversation.interface';

@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}

  @Post('chat')
  async chat(@Body() body: MessageDto) {
    console.log(body);
    const response = await this.geminiService.getResponse(body);
    return { response };
  }

  /*@Get()
  async getAllMessages(): Promise<ConversationInterface[]> {
    return await this.geminiService.GetHello();
  }*/
}
