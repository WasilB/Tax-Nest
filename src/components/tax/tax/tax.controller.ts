import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaxDTO } from './tax.Dto';
import { TaxService } from './tax.service';

@Controller('tax')
export class TaxController {
  constructor(private readonly taxService: TaxService) {}

  @Post()
  create(@Body() createTaxDto: TaxDTO) {
    return this.taxService.createTax(createTaxDto);
  }

  @Get()
  findAll() {
    return this.taxService.getAllTax();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taxService.getTaxById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() createTaxDto: TaxDTO) {
    return this.taxService.updateTax(id, createTaxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.taxService.deleteTax(id);
  }
}
