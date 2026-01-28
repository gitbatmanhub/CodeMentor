import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType } from '@nestjs/graphql';

@Entity({ name: 'projects' })
@ObjectType()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  idProjecto: string;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  dificultad: string;
}
