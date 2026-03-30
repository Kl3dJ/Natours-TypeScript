import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AuthDto } from './dto/auth.dto';
import { ForgotPasswordDto } from './dto/password-reset.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../users/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signup(authDto: AuthDto) {
    const { email, password } = authDto;

    // Check if user already exists
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new BadRequestException('Email already in use');
    }

    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userModel.create({
      email,
      password: hashedPassword,
      name: email.split('@')[0], // Default name from email
    });

    // Generate JWT token
    const token = this.jwtService.sign({ id: user._id });

    return {
      status: 'success',
      token,
      data: {
        user: {
          id: user._id,
          email: user.email,
          name: user.name,
        },
      },
    };
  }

  async login(authDto: AuthDto) {
    const { email, password } = authDto;

    // Validate email & password exist
    if (!email || !password) {
      throw new BadRequestException('Please provide email and password');
    }

    // Check for user and get password field
    const user = await this.userModel
      .findOne({ email })
      .select('+password +active');

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Incorrect email or password');
    }

    // Check if user is active
    if (!user.active) {
      throw new UnauthorizedException('User account is inactive');
    }

    // Generate JWT token
    const token = this.jwtService.sign({ id: user._id });

    return {
      status: 'success',
      token,
      data: {
        user: {
          id: user._id,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      },
    };
  }

  async forgotPassword(forgotPasswordDto: ForgotPasswordDto) {
    const { email } = forgotPasswordDto;

    // Get user by email
    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new NotFoundException('There is no user with that email address');
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');

    // Hash token and save to user
    const resetTokenHash = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    await this.userModel.findByIdAndUpdate(user._id, {
      passwordResetToken: resetTokenHash,
      passwordResetExpires: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
    });

    // Send token to user (in production, send via email)
    return {
      status: 'success',
      message: 'Token sent to email',
      resetToken, // In production, don't return this - send via email instead
    };
  }

  async resetPassword(resetToken: string, resetPasswordDto: ResetPasswordDto) {
    const { password, passwordConfirm } = resetPasswordDto;

    // Validate passwords match
    if (password !== passwordConfirm) {
      throw new BadRequestException('Passwords do not match');
    }

    // Hash the reset token
    const resetTokenHash = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    // Find user with valid reset token
    const user = await this.userModel.findOne({
      passwordResetToken: resetTokenHash,
      passwordResetExpires: { $gt: new Date() },
    });

    if (!user) {
      throw new BadRequestException('Token is invalid or has expired');
    }

    // Hash new password and update user
    const hashedPassword = await bcrypt.hash(password, 10);

    await this.userModel.findByIdAndUpdate(user._id, {
      password: hashedPassword,
      passwordResetToken: null,
      passwordResetExpires: null,
    });

    // Generate new JWT token
    const token = this.jwtService.sign({ id: user._id });

    return {
      status: 'success',
      token,
      message: 'Password reset successfully',
    };
  }

  async validateUser(userId: string) {
    const user = await this.userModel.findById(userId).select('+active');

    if (!user || !user.active) {
      return null;
    }

    return user;
  }
}
