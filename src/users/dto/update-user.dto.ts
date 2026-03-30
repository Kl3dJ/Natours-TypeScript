import { IsEmail, IsString, IsEnum, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  passwordConfirm?: string;

  @IsOptional()
  @IsEnum(['user', 'admin', 'guide', 'lead-guide'])
  role?: string;

  @IsOptional()
  @IsString()
  photo?: string;
}
