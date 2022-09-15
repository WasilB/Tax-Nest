import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxGroupEntity } from 'src/entities/taxGroup.entity';
import { TaxGroupController } from './tax-group.controller';
import { TaxGroupService } from './tax-group.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaxGroupEntity])],
  controllers: [TaxGroupController],
  providers: [TaxGroupService],
})
export class TaxGroupModule {}
