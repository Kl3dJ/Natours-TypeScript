import { Controller, Post, Body, Patch, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dtos/auth.dto';
import { ForgotPasswordDto } from './dtos/password-reset.dto';
import { ResetPasswordDto } from './dtos/reset-password.dto';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('signup')
  signup(@Body() authDto: AuthDto) {
    return this.authService.signup(authDto);
  }

  @Public()
  @Post('login')
  login(@Body() authDto: AuthDto) {
    return this.authService.login(authDto);
  }

  @Public()
  @Post('forgot-password')
  forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return this.authService.forgotPassword(forgotPasswordDto);
  }

  @Public()
  @Patch('reset-password/:token')
  resetPassword(
    @Param('token') resetToken: string,
    @Body() resetPasswordDto: ResetPasswordDto,
  ) {
    return this.authService.resetPassword(resetToken, resetPasswordDto);
  }
}
