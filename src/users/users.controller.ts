import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('new')
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      await this.usersService.create(createUserDto);
      return Object.assign({
        statusCode: 200,
        statusMsg: 'create success',
      });
    } catch (e) {
      console.log(e);
    }
  }

  @Post(':page')
  async findAll(
    @Param('page') page: number,
    @Body() condition: { entities: number; filter: [] },
  ) {
    return await this.usersService.findAll(page, condition);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.userDetail(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.usersService.remove(+id);
      return Object.assign({
        statusCode: 200,
        statusMsg: 'delete success',
      });
    } catch (e) {
      console.log(e);
    }
  }
}
