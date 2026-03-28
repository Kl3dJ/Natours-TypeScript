import {
  IsString,
  IsNumber,
  IsEnum,
  IsOptional,
  Min,
  Max,
  IsArray,
} from 'class-validator';

export class CreateTourDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  slug?: string;

  @IsEnum(['easy', 'medium', 'difficult'])
  difficulty: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  ratingsAverage?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  ratingsQuantity?: number;

  @IsNumber()
  @Min(0)
  price: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  priceDiscount?: number;

  @IsString()
  summary: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  imageCover: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];
}
