import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { from, Observable } from 'rxjs';

import { TaxDTO } from './tax.Dto';
import { TaxEntity } from '../../../entities/tax.entity';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');
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
    socket.emit('message', 'Hi DB updated');
    return from(this.taxModel.save(taxDTO));
  }

  deleteTax(id: string): Observable<DeleteResult> {
    socket.emit('message');
    return from(this.taxModel.delete(id));
  }

  updateTax(id: string, taxDTO: TaxDTO): Observable<UpdateResult> {
    socket.emit('message');
    return from(this.taxModel.update(id, taxDTO));
  }

  getTaxById(id: string): Observable<TaxDTO> {
    return from(this.taxModel.findOneBy({ id: id }));
  }
}
