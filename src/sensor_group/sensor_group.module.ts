import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SensorGroupService } from './sensor_group.service';
import { SensorGroupController } from './sensor_group.controller';
import { Sensor_Group } from './entities/sensor_group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sensor_Group])],
  controllers: [SensorGroupController],
  providers: [SensorGroupService],
})
export class SensorGroupModule {}
