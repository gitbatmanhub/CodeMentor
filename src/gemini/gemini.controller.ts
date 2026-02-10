import { Body, Controller, Post } from '@nestjs/common';
import { MessageDto } from './dto/message.dto';
import { Auth, GetUserREST } from '../auth/decorators';
import { User } from '../auth/entities/user.entity';
import { responseInterface, TutorService } from './tutor.service';
import { TestEvaluateDto } from './dto/test.evaluate.dto';

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

  @Post('chatFree')
  async chatFree(
    @Body() body: MessageDto,
    @GetUserREST() user: User,
  ): Promise<responseInterface> {
    return await this.tutorService.responderFree(body, user);
  }

  @Post('chatProject')
  async chatProject(
    @Body() body: MessageDto,
    @GetUserREST() user: User,
  ): Promise<responseInterface> {
    return await this.tutorService.responderProject(body, user);
  }

  @Post('testProject')
  async testProject(
    @Body() body: MessageDto,
    @GetUserREST() user: User,
  ): Promise<any> {
    return await this.tutorService.responderTest(body, user);
  }

  @Post('evaluateTest')
  async evaluateTest(
    @Body() body: TestEvaluateDto,
    @GetUserREST() user: User,
  ): Promise<any> {
    return await this.tutorService.evaluateTest(body, user);
  }

  /*@Get()
  async getAllMessages(): Promise<ConversationInterface[]> {
    return await this.geminiService.GetHello();
  }*/
}
