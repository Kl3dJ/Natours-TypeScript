import { IsString, IsNumber, IsMongoId, Min, Max } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  review: string;

  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;

  @IsMongoId()
  tour: string;

  @IsMongoId()
  user: string;
}
