import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { Sensor_Group } from './entities/sensor_group.entity';
import { SensorGroupService } from './sensor_group.service';
import { CreateSensorGroupDto } from './dto/create-sensor_group.dto';
import { UpdateSensorGroupDto } from './dto/update-sensor_group.dto';

@Controller('sensor_group')
export class SensorGroupController {
  constructor(private readonly sensorGroupService: SensorGroupService) {}

  @Post()
  create(@Body() createSensorGroupDto: CreateSensorGroupDto) {
    return this.sensorGroupService.create(createSensorGroupDto);
  }

  @Get()
  async findAll() {
    return await this.sensorGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sensorGroupService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSensorGroupDto: UpdateSensorGroupDto,
  ) {
    return this.sensorGroupService.update(+id, updateSensorGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sensorGroupService.remove(+id);
  }
}
