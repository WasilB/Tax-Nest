import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaxGroupDto } from './tax-group.Dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { from, Observable } from 'rxjs';
import { TaxGroupEntity } from 'src/entities/taxGroup.entity';

@Injectable()
export class TaxGroupService {
  constructor(
    @InjectRepository(TaxGroupEntity)
    private readonly taxGroupRepository: Repository<TaxGroupEntity>,
  ) {}

  getAllTaxGroup(): Observable<TaxGroupDto[]> {
    return from(this.taxGroupRepository.find({}));
  }

  createTaxGroup(taxGroupDTO: any): Observable<TaxGroupDto> {
    return from(this.taxGroupRepository.save(taxGroupDTO));
  }

  deleteTaxGroup(id: string): Observable<DeleteResult> {
    return from(this.taxGroupRepository.delete(id));
  }

  updateTaxGroup(
    id: string,
    taxGroupDTO: TaxGroupDto,
  ): Observable<UpdateResult> {
    return from(this.taxGroupRepository.update(id, taxGroupDTO));
  }

  getTaxGroupById(id: string): Observable<TaxGroupDto> {
    return from(this.taxGroupRepository.findOneBy({ id: id }));
  }
}
