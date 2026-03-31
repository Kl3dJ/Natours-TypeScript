import {
  IsString,
  IsNumber,
  IsEnum,
  IsOptional,
  Min,
  Max,
  IsArray,
  IsBoolean,
  IsObject,
} from 'class-validator';

export class UpdateTourDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  slug?: string;

  @IsOptional()
  @IsEnum(['easy', 'medium', 'difficult'])
  difficulty?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  ratingsAverage?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  ratingsQuantity?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  price?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  priceDiscount?: number;

  @IsOptional()
  @IsString()
  summary?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  imageCover?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];

  @IsOptional()
  @IsArray()
  startDates?: Date[];

  @IsOptional()
  @IsNumber()
  @Min(0)
  duration?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  maxGroupSize?: number;

  @IsOptional()
  @IsObject()
  startLocation?: {
    type?: string;
    coordinates?: number[];
    address?: string;
    description?: string;
  };

  @IsOptional()
  @IsArray()
  locations?: Array<{
    type?: string;
    coordinates?: number[];
    address?: string;
    description?: string;
    day?: number;
  }>;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  guides?: string[];

  @IsOptional()
  @IsBoolean()
  secretTour?: boolean;
}
