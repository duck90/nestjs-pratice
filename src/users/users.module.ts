import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { Sensor_Group } from 'src/sensor_group/entities/sensor_group.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Sensor_Group]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
