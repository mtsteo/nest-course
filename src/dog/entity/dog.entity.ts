import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DogEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  color: string;
}
