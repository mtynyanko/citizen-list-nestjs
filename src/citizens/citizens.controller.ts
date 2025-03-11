import { Controller, Get, Post, Body } from '@nestjs/common';
import { CitizensService } from './citizens.service';
import { CreateCitizenDto } from './dto/create-citizen.dto';

@Controller('citizens')
export class CitizensController {
  constructor(private readonly citizensService: CitizensService) {}

  @Post()
  create(@Body() createCitizenDto: CreateCitizenDto) {
    return this.citizensService.createCitizen(createCitizenDto);
  }

  @Get()
  findAll() {
    return this.citizensService.findAll();
  }
}
