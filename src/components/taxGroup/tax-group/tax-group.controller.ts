import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaxGroupDto } from './tax-group.Dto';
import { TaxGroupService } from './tax-group.service';

@Controller('taxGroup')
export class TaxGroupController {
  constructor(private readonly taxGroupService: TaxGroupService) {}

  @Post()
  create(@Body() createTaxGroupDto: TaxGroupDto) {
    return this.taxGroupService.createTaxGroup(createTaxGroupDto);
  }

  @Get()
  findAll() {
    return this.taxGroupService.getAllTaxGroup();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taxGroupService.getTaxGroupById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() createTaxGroupDto: TaxGroupDto) {
    return this.taxGroupService.updateTaxGroup(id, createTaxGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.taxGroupService.deleteTaxGroup(id);
  }
}
