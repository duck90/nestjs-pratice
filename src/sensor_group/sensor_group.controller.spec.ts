import { Test, TestingModule } from '@nestjs/testing';
import { SensorGroupController } from './sensor_group.controller';
import { SensorGroupService } from './sensor_group.service';

describe('SensorGroupController', () => {
  let controller: SensorGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SensorGroupController],
      providers: [SensorGroupService],
    }).compile();

    controller = module.get<SensorGroupController>(SensorGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
