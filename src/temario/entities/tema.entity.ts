import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { QuestionEntity } from '../../questionary/entities/question.entity';
import { UnidadEntity } from './unidad.entity';
import { Product } from '../../products/entities';
import { UnidadUsuarioTemaEntity } from './unidad-usuario-tema.entity';

@Entity('tema')
export class TemaEntity {
  @PrimaryGeneratedColumn('uuid')
  idTema: string;

  @Column()
  descripcion: string;

  @Column({ type: 'float' })
  duracionHoras: number;

  @Column()
  instructores: string;

  @Column()
  nivelDificultad: string;

  @ManyToOne(() => UnidadEntity, (unidad) => unidad.temas, {
    onDelete: 'CASCADE',
    eager: true,
  })
  unidad: QuestionEntity;

  @OneToMany(
    () => UnidadUsuarioTemaEntity,
    (unidadUsuarioTema) => unidadUsuarioTema.tema,
  )
  unidadUsuarioTema: UnidadUsuarioTemaEntity;
}
