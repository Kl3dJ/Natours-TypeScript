import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ToursService } from './tours.service';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';

@Controller('tours')
export class ToursController {
  constructor(private readonly tourService: ToursService) {}

  @Get()
  async findAll() {
    const tours = await this.tourService.findAll();
    return {
      status: 'success',
      results: tours.length,
      data: tours,
    };
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const tour = await this.tourService.findById(id);
    return {
      status: 'success',
      data: tour,
    };
  }

  @Post()
  create(@Body() createTourDto: CreateTourDto) {
    return this.tourService.create(createTourDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTourDto: UpdateTourDto) {
    return this.tourService.update(id, updateTourDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tourService.remove(id);
  }
}
