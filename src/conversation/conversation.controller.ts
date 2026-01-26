import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ConversationService } from './conversation.service';
// import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';

@Controller('conversation')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @Get()
  findAll() {
    return this.conversationService.findAll();
  }

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

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateConversationDto: UpdateConversationDto,
  ) {
    return this.conversationService.update(+id, updateConversationDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.conversationService.remove(+id);
  // }

  @Delete()
  removeAll(): string {
    return this.conversationService.deleteAll();
  }
}
