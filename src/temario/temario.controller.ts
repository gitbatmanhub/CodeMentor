import { Controller, Get, Query } from '@nestjs/common';
import { TemarioService } from './temario.service';

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
