import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Query,
  UseGuards,
} from '@nestjs/common';

@Controller('tours')
export class ToursController {
  @Get()
  findAll(): string {
    return 'this returns all tours';
  }
}
