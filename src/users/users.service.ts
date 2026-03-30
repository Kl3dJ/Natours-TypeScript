import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findAll() {
    return this.userModel.find({ active: true });
  }

  async findById(id: string) {
    return this.userModel.findById(id);
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({ email }).select('+password');
  }

  async create(createUserDto: CreateUserDto) {
    const { password, passwordConfirm, ...rest } = createUserDto;

    if (password !== passwordConfirm) {
      throw new BadRequestException('Passwords do not match');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = new this.userModel({
      ...rest,
      password: hashedPassword,
    });
    return createdUser.save();
  }

  async updateUser(id: string, updateUserDto: Partial<CreateUserDto>) {
    if (updateUserDto.password && updateUserDto.passwordConfirm) {
      throw new Error(
        'This route is not for password updates. Please use /updateMyPassword.',
      );
    }
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }

  async deleteMe(id: string) {
    await this.userModel.findByIdAndUpdate(
      id,
      { active: false },
      { returnDocument: 'after' },
    );
    return {
      status: 'success',
      message: 'User deactivated successfully',
    };
  }
}
