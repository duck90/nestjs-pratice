import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { IUserListRes } from './users.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.usersRepository.save({
      name: createUserDto.name,
      age: createUserDto.age,
      email: createUserDto.email,
      role: createUserDto.role,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    });
  }

  async findAll(page, condition): Promise<IUserListRes> {
    const { entities, filter } = condition;
    const users = await this.usersRepository
      .createQueryBuilder()
      .select(['id', 'name', 'age', 'email', 'role', 'created_at'])
      .where('deleted_at is null')
      .take(entities)
      .skip((Number(page) - 1) * condition.entities)
      .getRawMany();

    const { count } = await this.usersRepository
      .createQueryBuilder()
      .select(['COUNT(1)'])
      .where('deleted_at is null')
      .getRawOne();

    return {
      list: users,
      current: page,
      totalPage: Math.ceil(count / condition.entities),
    };
  }

  async userDetail(id: number): Promise<User> {
    return await this.usersRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    const user = await this.usersRepository.findOne({
      where: { id },
    });
    user.deleted_at = new Date();

    return await this.usersRepository.update(id, user);
  }
}
