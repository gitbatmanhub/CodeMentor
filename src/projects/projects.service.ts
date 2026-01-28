import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { initialData } from '../seed/data/seed';
import { QuestionEntity } from '../questionary/entities/question.entity';
import { OptionEntity } from '../questionary/entities/option.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UnidadEntity } from '../temario/entities/unidad.entity';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}
  create(createProjectDto: CreateProjectDto) {
    return 'This action adds a new project';
  }

  findAll() {
    return this.projectRepository.find();
  }

  findOne(id: string) {
    return this.projectRepository.findOne({
      where: { idProjecto: id },
    });
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }

  insertAllProjects() {
    const projectsSeed = initialData.projects;

    for (const q of projectsSeed) {
      const project = new Project();
      project.nombre = q.nombre;
      project.descripcion = q.descripcion;
      project.dificultad = q.dificultad;
    }
    this.projectRepository.save(projectsSeed);
  }

  async deleteAll() {
    const queryBuilder = this.projectRepository.createQueryBuilder('projects');
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
}
