import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TemarioService } from './temario.service';
import { CreateTemarioDto } from './dto/create-temario.dto';
import { UpdateTemarioDto } from './dto/update-temario.dto';

@Controller('temario')
export class TemarioController {
  constructor(private readonly temarioService: TemarioService) {}

  @Post()
  create(@Body() createTemarioDto: CreateTemarioDto) {
    return this.temarioService.create(createTemarioDto);
  }

  @Get()
  findAll() {
    return this.temarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.temarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTemarioDto: UpdateTemarioDto) {
    return this.temarioService.update(+id, updateTemarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.temarioService.remove(+id);
  }
}
