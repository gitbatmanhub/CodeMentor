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
import { TemarioService } from './temario.service';
import { CreateTemarioDto } from './dto/create-temario.dto';
import { UpdateTemarioDto } from './dto/update-temario.dto';

@Controller('temario')
export class TemarioController {
  constructor(private readonly temarioService: TemarioService) {}

  @Get('unidades')
  findAllUnidades(@Query('idUnidad') idUnidad: string) {
    return this.temarioService.findAllUnidades(idUnidad);
  }

  @Get('temas')
  findAllTemas(@Query('idTema') idTema: string) {
    return this.temarioService.findAllTemas(idTema);
  }
}
