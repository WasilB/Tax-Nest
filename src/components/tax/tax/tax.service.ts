import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { from, Observable } from 'rxjs';

import { TaxDTO } from './tax.Dto';
import { TaxEntity } from '../../../entities/tax.entity';

@Injectable()
export class TaxService {
  constructor(
    @InjectRepository(TaxEntity)
    private readonly taxModel: Repository<TaxEntity>,
  ) {}
  getAllTax(): Observable<TaxDTO[]> {
    return from(this.taxModel.find({}));
  }

  createTax(taxDTO: any): Observable<TaxDTO> {
    return from(this.taxModel.save(taxDTO));
  }

  deleteTax(id: string): Observable<DeleteResult> {
    return from(this.taxModel.delete(id));
  }

  updateTax(id: string, taxDTO: TaxDTO): Observable<UpdateResult> {
    return from(this.taxModel.update(id, taxDTO));
  }

  getTaxById(id: string): Observable<TaxDTO> {
    return from(this.taxModel.findOneBy({ id: id }));
  }
}
