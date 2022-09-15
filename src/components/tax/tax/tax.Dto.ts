import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class TaxDTO {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  taxName: string;

  @Column()
  taxPercentage: string;

  @Column()
  name: string;
}
