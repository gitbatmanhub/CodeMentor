import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { QuestionEntity } from './question.entity';

@Entity('option')
export class OptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  text: string;

  @Column()
  value: number;

  @ManyToOne(() => QuestionEntity, (question) => question.options, {
    onDelete: 'CASCADE',
  })
  question: QuestionEntity;
}
