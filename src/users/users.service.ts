import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { CreateUserDto, UpdateUserDto } from './dtos';
import { User } from './user.entity';
import { IUserListRes } from './users.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  // findAll() {
  //   return 'find All';
  // }

  async findAll(page, condition): Promise<IUserListRes> {
    const [users, total] = await this.usersRepository.findAndCount({
      take: condition.entities,
      skip: (Number(page) - 1) * condition.entities,
    });
    console.log(users.length);
    return {
      data: users,
      current: page,
      totalPage: Math.ceil(total / condition.entities),
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
