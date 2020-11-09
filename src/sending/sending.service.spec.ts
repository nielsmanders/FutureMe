import { Test, TestingModule } from '@nestjs/testing';
import { SendingService } from './sending.service';

describe('SendingService', () => {
  let service: SendingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendingService],
    }).compile();

    service = module.get<SendingService>(SendingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
