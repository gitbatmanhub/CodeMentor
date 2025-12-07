import { Test, TestingModule } from '@nestjs/testing';
import { TestCamelCaseService } from './test-camel-case.service';

describe('TestCamelCaseService', () => {
  let service: TestCamelCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestCamelCaseService],
    }).compile();

    service = module.get<TestCamelCaseService>(TestCamelCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
