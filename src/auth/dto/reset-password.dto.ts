import { IsString, MinLength, IsNotEmpty, ValidateBy } from 'class-validator';

export class ResetPasswordDto {
  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  password: string;

  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  passwordConfirm: string;
}
