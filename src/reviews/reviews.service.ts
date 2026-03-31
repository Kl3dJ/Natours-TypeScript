import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review, ReviewDocument } from './schemas/review.schema';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectModel(Review.name) private reviewModel: Model<ReviewDocument>,
  ) {}

  async findAll() {
    const reviews = await this.reviewModel.find().populate('tour user');
    return {
      status: 'success',
      results: reviews.length,
      data: reviews,
    };
  }
  async findOne(id: string) {
    const review = await this.reviewModel.findById(id).populate('tour user');
    if (!review) {
      return {
        status: 'fail',
        message: 'No review found with that ID',
      };
    }
    return {
      status: 'success',
      data: review,
    };
  }

  async create(createReviewDto: CreateReviewDto) {
    const createdReview = new this.reviewModel(createReviewDto);
    return createdReview.save();
  }

  async update(id: string, updateReviewDto: UpdateReviewDto) {
    const updatedReview = await this.reviewModel.findByIdAndUpdate(
      id,
      updateReviewDto,
      { new: true },
    );
    if (!updatedReview) {
      return {
        status: 'fail',
        message: 'No review found with that ID',
      };
    }
    return {
      status: 'success',
      data: updatedReview,
    };
  }

  async remove(id: string) {
    const deletedReview = await this.reviewModel.findByIdAndDelete(id);
    if (!deletedReview) {
      return {
        status: 'fail',
        message: 'No review found with that ID',
      };
    }
    return {
      status: 'success',
      data: deletedReview,
    };
  }
}
