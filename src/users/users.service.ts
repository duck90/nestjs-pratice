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

  async findAll(page, condition): Promise<IUserListRes> {
    const { entities, filter } = condition;

    const list = await this.usersRepository
      .createQueryBuilder('users_enc')
      .select([
        'ugid',
        'idx as user_uid',
        'company',
        `convert_from(decrypt(decode(name,'hex'),'${process.env.ENCRYPTION_KEY}','aes'),'utf8') as user_name`,
        `convert_from(decrypt(decode(email,'hex'),'${process.env.ENCRYPTION_KEY}','aes'),'utf8') as user_email`,
        'role',
        'last_login',
        'is_lock',
        'lock_reason',
        'latest_try_login_date',
      ])
      // .from('users_enc', 'u')
      .take(entities)
      .skip((Number(page) - 1) * condition.entities)
      .printSql()
      .getRawMany();

    const { count } = await this.usersRepository
      .createQueryBuilder()
      .select(['COUNT(1)'])
      .printSql()
      .getRawOne();

    return {
      list,
      current: entities,
      totalPage: Math.ceil(Number(count) / entities),
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
