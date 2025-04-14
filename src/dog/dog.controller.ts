import { Controller, Get, Post, Body } from '@nestjs/common';
import { DogService } from './dog.service';
import { CreateDogDto } from './dto/create-dog.dto';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Post()
  create(@Body() createDogDto: CreateDogDto) {
    return this.dogService.create(createDogDto);
  }

  @Get()
  findAll() {
    return this.dogService.findAll();
  }
}
