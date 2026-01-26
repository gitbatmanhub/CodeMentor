import { Body, Controller, Post } from '@nestjs/common';
import { MessageDto } from './dto/message.dto';
import { Auth, GetUserREST } from '../auth/decorators';
import { User } from '../auth/entities/user.entity';
import { responseInterface, TutorService } from './tutor.service';

@Auth()
@Controller('gemini')
export class GeminiController {
  constructor(private readonly tutorService: TutorService) {}

  @Post('chat')
  async chat(
    @Body() body: MessageDto,
    @GetUserREST() user: User,
  ): Promise<responseInterface> {
    console.log(body);

    return await this.tutorService.responder(body, user);
  }

  /*@Get()
  async getAllMessages(): Promise<ConversationInterface[]> {
    return await this.geminiService.GetHello();
  }*/
}
