import { Injectable } from '@nestjs/common';
import { CreateTemarioDto } from './dto/create-temario.dto';
import { UpdateTemarioDto } from './dto/update-temario.dto';
import { initialData } from '../seed/data/seed';
import { QuestionEntity } from '../questionary/entities/question.entity';
import { OptionEntity } from '../questionary/entities/option.entity';
import { UnidadEntity } from './entities/unidad.entity';
import { TemaEntity } from './entities/tema.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TemarioService {
  constructor(
    @InjectRepository(UnidadEntity)
    private readonly unidadRepository: Repository<UnidadEntity>,
    @InjectRepository(TemaEntity)
    private readonly temaRepository: Repository<TemaEntity>,
  ) {}
  create(createTemarioDto: CreateTemarioDto) {
    return 'This action adds a new temario';
  }

  createSeed() {
    const unidadesSeed = initialData.unidades;

    for (const u of unidadesSeed) {
      console.log(u.descripcion);
      const unidadEntity = new UnidadEntity();
      unidadEntity.description = u.descripcion;
      unidadEntity.duracionHoras = u.duracionHoras;

      unidadEntity.temas = u.temas.map((temaItem) => {
        const tema = new TemaEntity();
        tema.descripcion = temaItem.descripcion;
        tema.duracionHoras = temaItem.duracionHoras;
        tema.instructores = temaItem.instructores;
        tema.nivelDificultad = temaItem.nivelDificultad;
        return tema;
      });

      this.unidadRepository.save(unidadEntity);
    }
  }

  async findAll() {
    return await this.unidadRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} temario`;
  }

  update(id: number, updateTemarioDto: UpdateTemarioDto) {
    return `This action updates a #${id} temario`;
  }

  remove(id: number) {
    return `This action removes a #${id} temario`;
  }
}
