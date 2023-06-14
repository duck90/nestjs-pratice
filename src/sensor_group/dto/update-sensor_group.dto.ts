import { PartialType } from '@nestjs/mapped-types';
import { CreateSensorGroupDto } from './create-sensor_group.dto';

export class UpdateSensorGroupDto extends PartialType(CreateSensorGroupDto) {}
