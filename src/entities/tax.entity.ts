import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TaxModel')
export class TaxEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  taxName: string;

  @Column()
  taxPercentage: string;

  @Column()
  name: string;
}
