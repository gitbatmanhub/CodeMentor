import { Body, Controller, Get, Post } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { MessageDto } from './dto/message.dto';

@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}

  @Post('chat')
  async chat(@Body() body: MessageDto) {
    const response = await this.geminiService.getResponse(body.message);
    return { response };
  }

  @Get()
  async returnHello() {
    return await this.geminiService.GetHello();
  }
}
