import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TemaEntity } from './tema.entity';
import { UnidadUsuarioEntity } from './unidad-usuario.entity';

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

  @OneToMany(
    () => UnidadUsuarioEntity,
    (unidadUsuario) => unidadUsuario.idUnidad,
    { cascade: true },
  )
  unidadUsuario: UnidadUsuarioEntity;
}
