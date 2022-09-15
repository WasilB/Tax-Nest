import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TaxGroupModel')
export class TaxGroupEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
