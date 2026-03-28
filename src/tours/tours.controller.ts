import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
import { ToursService } from './tours.service';

@Controller('tours')
export class ToursController {
  constructor(private readonly tourService: ToursService) {}

  @Get()
  findAll() {
    return this.tourService.findAll();
  }
}
