import { Controller, Get, Param, Query } from '@nestjs/common';
import { TemarioService } from './temario.service';
import { Auth } from '../auth/decorators';

@Auth()
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

  @Get(':idTema')
  findOne(@Param('idTema') idTema: string) {
    return this.temarioService.findTemaById(idTema);
  }
}
