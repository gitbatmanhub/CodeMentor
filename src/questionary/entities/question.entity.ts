import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OptionEntity } from './option.entity';

@Entity('question')
export class QuestionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  text: string;

  @OneToMany(() => OptionEntity, (option) => option.question, { cascade: true })
  options: OptionEntity[];
}
