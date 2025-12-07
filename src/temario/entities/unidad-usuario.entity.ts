import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../auth/entities/user.entity';
import { ObjectType } from '@nestjs/graphql';
import { UnidadEntity } from './unidad.entity';

@Entity('unidad_usuario')
@ObjectType()
export class UnidadUsuarioEntity {
  @PrimaryGeneratedColumn('uuid')
  idUnidadUsuario: string;

  @ManyToOne(() => UnidadEntity, (unidad) => unidad, { eager: true })
  idUnidad: UnidadEntity;

  @ManyToOne(() => User, (user) => user, { eager: true })
  idUsuario: User;

  @OneToMany(
    () => UnidadUsuarioEntity,
    (unidadUsuarioEntity) => unidadUsuarioEntity.idUnidadUsuario,
  )
  unidadUsuario: UnidadUsuarioEntity;

  @Column('int')
  avance: number;
}
