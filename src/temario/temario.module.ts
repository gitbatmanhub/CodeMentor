import { Module } from '@nestjs/common';
import { TemarioService } from './temario.service';
import { TemarioController } from './temario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnidadEntity } from './entities/unidad.entity';
import { TemaEntity } from './entities/tema.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UnidadEntity, TemaEntity])],
  controllers: [TemarioController],
  providers: [TemarioService],
  exports: [TemarioService, TypeOrmModule],
})
export class TemarioModule {}
