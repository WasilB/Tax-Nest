import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class TaxGroupDto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
