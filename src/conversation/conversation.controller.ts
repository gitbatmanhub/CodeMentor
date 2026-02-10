import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ConversationService } from './conversation.service';
// import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
import { Auth } from '../auth/decorators';

@Auth()
@Controller('conversation')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @Get('main')
  findAllConversation() {
    return this.conversationService.findAllConversaciones();
  }

  @Get('user-tema')
  findOne(
    @Query('idTema') idTema: string,
    @Query('idUsuario') idUsuario: string,
  ) {
    return this.conversationService.findOneConversationMain(idTema, idUsuario);
  }

  @Get('user-mode')
  findOneByTema(
    @Query('idUsuario') idUsuario: string,
    @Query('mode') mode: string,
    @Query('idTemaConversacion') idTemaConversacion: string,
  ) {
    return this.conversationService.findOneConversationMainByMode(
      idUsuario,
      mode,
      idTemaConversacion,
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateConversationDto: UpdateConversationDto,
  ) {
    return this.conversationService.update(+id, updateConversationDto);
  }

  @Delete()
  removeAll(): string {
    return this.conversationService.deleteAll();
  }
}
