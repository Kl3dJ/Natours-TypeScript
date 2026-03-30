import {
  IsString,
  IsEmail,
  MinLength,
  IsNotEmpty,
  IsEnum,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  password: string;

  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  passwordConfirm: string;

  @IsString()
  @IsEnum(['user', 'admin', 'guide', 'lead-guide'])
  role: string;

  @IsString()
  photo: string;
}
