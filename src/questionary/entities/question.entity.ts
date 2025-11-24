import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OptionEntity } from './option.entity';

@Entity('question')
export class QuestionEntity {
  @PrimaryGeneratedColumn()
  idQuestion: number;

  @Column('text')
  question_text: string;

  @OneToMany(() => OptionEntity, (option) => option.question, { cascade: true })
  options: OptionEntity[];
}
