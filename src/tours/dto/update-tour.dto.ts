import {
  IsString,
  IsNumber,
  IsEnum,
  IsOptional,
  Min,
  Max,
  IsArray,
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
}
