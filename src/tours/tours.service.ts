import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tour, TourDocument } from './schemas/tour.schema';

@Injectable()
export class ToursService {
  constructor(@InjectModel(Tour.name) private tourModel: Model<TourDocument>) {}

  async findAll() {
    const tours = await this.tourModel.find().populate('guides');
    return tours;
  }

  async findById(id: string) {
    const tour = await this.tourModel.findById(id).populate('guides');
    if (!tour) {
      throw new NotFoundException(`Cannot found a tour with this id: ${id}`);
    }
    return tour;
  }

  async create(createTourDto: any) {
    const createdTour = new this.tourModel(createTourDto);
    return createdTour.save();
  }

  async update(id: string, updateTourDto: any) {
    const updatedTour = await this.tourModel.findByIdAndUpdate(
      id,
      updateTourDto,
      { new: true },
    );
    if (!updatedTour) {
      throw new NotFoundException(`Cannot find a tour with this id: ${id}`);
    }
    return updatedTour;
  }

  async remove(id: string) {
    const deletedTour = await this.tourModel.findByIdAndDelete(id);
    if (!deletedTour) {
      throw new NotFoundException(`Cannot find a tour with this id: ${id}`);
    }
    return deletedTour;
  }
}
