import { Module } from '@nestjs/common';
import { TemarioService } from './temario.service';
import { TemarioController } from './temario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnidadEntity } from './entities/unidad.entity';
import { TemaEntity } from './entities/tema.entity';
import { UnidadUsuarioEntity } from './entities/unidad-usuario.entity';
import { UnidadUsuarioTemaEntity } from './entities/unidad-usuario-tema.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UnidadEntity,
      TemaEntity,
      UnidadUsuarioEntity,
      UnidadUsuarioTemaEntity,
    ]),
  ],
  controllers: [TemarioController],
  providers: [TemarioService],
  exports: [TemarioService, TypeOrmModule],
})
export class TemarioModule {}
