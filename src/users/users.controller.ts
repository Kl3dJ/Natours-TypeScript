import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from '../auth/auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthDto } from '../auth/dtos/auth.dto';
import { Public } from '../auth/public.decorator';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return {
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    };
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const user = await this.usersService.findById(id);
    return {
      status: 'success',
      data: {
        user,
      },
    };
  }

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
  @Post('createUser')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: Partial<CreateUserDto>,
  ) {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Delete('deleteMe/:id')
  deleteMe(@Param('id') id: string) {
    return this.usersService.deleteMe(id);
  }
}
