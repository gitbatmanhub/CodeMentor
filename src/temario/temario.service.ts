import { Injectable, InternalServerErrorException } from '@nestjs/common';
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
      const unidadEntity = new UnidadEntity();
      unidadEntity.description = u.descripcion;
      unidadEntity.duracionHoras = u.duracionHoras;

      unidadEntity.temas = u.temas.map((temaItem) => {
        const tema = new TemaEntity();
        tema.descripcion = temaItem.descripcion;
        tema.duracionHoras = temaItem.duracionHoras;
        tema.instructores = temaItem.instructores;
        tema.nivelDificultad = temaItem.nivelDificultad;
        tema.isTest = temaItem.isTest;
        return tema;
      });

      this.unidadRepository.save(unidadEntity);
    }
  }

  async deleteAll() {
    const queryBuilder = this.temaRepository.createQueryBuilder('temario');
    try {
      return await queryBuilder.delete().where({}).execute();
    } catch (e) {
      return this.handlerDbException(e);
    }
  }
  async deleteAllUnidades() {
    const queryBuilder = this.unidadRepository.createQueryBuilder('unidad');
    try {
      return await queryBuilder.delete().where({}).execute();
    } catch (e) {
      return this.handlerDbException(e);
    }
  }
  private handlerDbException(error: any) {
    if (error.code === '23505') {
      console.error(`Error: ${error.message}`);
      throw new InternalServerErrorException(error.detail);
    }
    console.error(`Error: ${error.message}`);
    throw new InternalServerErrorException(error.message);
  }

  async findAllTemas(
    idTema: string | null,
  ): Promise<TemaEntity[] | TemaEntity> {
    let temas: TemaEntity[] | TemaEntity = [];

    if (idTema) {
      temas = await this.temaRepository.findOne({
        where: { idTema: idTema },
        relations: ['unidad'],
      });
    } else {
      temas = await this.temaRepository.find({
        relations: ['unidad'],
      });
    }

    return temas;
  }

  async findAllUnidades(
    idUnidad: string | null,
  ): Promise<UnidadEntity[] | UnidadEntity> {
    let unidades: UnidadEntity[] | UnidadEntity = [];

    if (idUnidad) {
      unidades = await this.unidadRepository.findOne({
        where: { idUnidad: idUnidad },
        relations: ['temas'],
      });
    } else {
      unidades = await this.unidadRepository.find({
        relations: ['temas'],
      });
    }

    return unidades;
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

  async findTemaById(id: string) {
    return await this.temaRepository.findOne({
      where: { idTema: id },
    });
  }

  async findUnidadById(id: string) {
    return await this.unidadRepository.findOne({
      where: { idUnidad: id },
    });
  }
}
