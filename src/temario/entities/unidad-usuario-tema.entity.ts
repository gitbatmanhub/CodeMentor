import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType } from '@nestjs/graphql';
import { UnidadUsuarioEntity } from './unidad-usuario.entity';
import { TemaEntity } from './tema.entity';

@Entity('unidad_usuario_tema')
@ObjectType()
export class UnidadUsuarioTemaEntity {
  @PrimaryGeneratedColumn('uuid')
  idUnidadUsuarioTema: string;

  @ManyToOne(
    () => UnidadUsuarioEntity,
    (unidadUsuario) => unidadUsuario.unidadUsuario,
    { eager: true },
  )
  unidadUsuario: UnidadUsuarioEntity;

  @ManyToOne(() => TemaEntity, (tema) => tema.unidadUsuarioTema, {
    eager: true,
  })
  tema: TemaEntity;

  @Column('int')
  avance: number;
}
