import { Body, Controller, Get, Post } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { MessageDto } from './dto/message.dto';
import { ConversationInterface } from '../conversation/interface/conversation.interface';
import { Auth, GetUserREST } from '../auth/decorators';
import { User } from '../auth/entities/user.entity';

@Auth()
@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}

  @Post('chat')
  async chat(@Body() body: MessageDto, @GetUserREST() user: User) {
    console.log(body);
    const response = await this.geminiService.getResponse(body, user);
    return { response };
  }

  /*@Get()
  async getAllMessages(): Promise<ConversationInterface[]> {
    return await this.geminiService.GetHello();
  }*/
}
