import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Sensor_Group } from './entities/sensor_group.entity';
import { CreateSensorGroupDto } from './dto/create-sensor_group.dto';
import { UpdateSensorGroupDto } from './dto/update-sensor_group.dto';

@Injectable()
export class SensorGroupService {
  constructor(
    @InjectRepository(Sensor_Group)
    private readonly sensorGroupRepository: Repository<Sensor_Group>,
  ) {}

  create(createSensorGroupDto: CreateSensorGroupDto) {
    return 'This action adds a new sensorGroup';
  }

  async findAll() {
    const list = await this.sensorGroupRepository
      .createQueryBuilder()
      .select()
      .getMany();

    console.log(list);

    return list;
  }

  findOne(id: number) {
    return `This action returns a #${id} sensorGroup`;
  }

  update(id: number, updateSensorGroupDto: UpdateSensorGroupDto) {
    return `This action updates a #${id} sensorGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} sensorGroup`;
  }
}
