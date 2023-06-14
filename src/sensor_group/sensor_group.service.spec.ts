import { Test, TestingModule } from '@nestjs/testing';
import { SensorGroupService } from './sensor_group.service';

describe('SensorGroupService', () => {
  let service: SensorGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SensorGroupService],
    }).compile();

    service = module.get<SensorGroupService>(SensorGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
