import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TemaEntity } from './tema.entity';

@Entity('unidad')
export class UnidadEntity {
  @PrimaryGeneratedColumn('uuid')
  idUnidad: string;

  @Column()
  description: string;

  @Column()
  duracionHoras: number;

  @OneToMany(() => TemaEntity, (tema) => tema.unidad, {
    cascade: true,
  })
  temas: TemaEntity[];
}
