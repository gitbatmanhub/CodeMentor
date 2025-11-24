import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { QuestionEntity } from '../../questionary/entities/question.entity';
import { UnidadEntity } from './unidad.entity';

@Entity('tema')
export class TemaEntity {
  @PrimaryGeneratedColumn()
  idTema: number;

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
  })
  unidad: QuestionEntity;
}
