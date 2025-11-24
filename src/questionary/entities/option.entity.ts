import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { QuestionEntity } from './question.entity';

@Entity('option')
export class OptionEntity {
  @PrimaryGeneratedColumn()
  idOption: number;

  @Column('text')
  option_label: string;

  @Column('text')
  option_text: string;

  @Column()
  score: number;

  @Column('text')
  profile_hint: string;

  @ManyToOne(() => QuestionEntity, (question) => question.options, {
    onDelete: 'CASCADE',
  })
  question: QuestionEntity;
}
