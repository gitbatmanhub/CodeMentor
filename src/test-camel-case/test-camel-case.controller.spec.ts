import { Test, TestingModule } from '@nestjs/testing';
import { TestCamelCaseController } from './test-camel-case.controller';
import { TestCamelCaseService } from './test-camel-case.service';

describe('TestCamelCaseController', () => {
  let controller: TestCamelCaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestCamelCaseController],
      providers: [TestCamelCaseService],
    }).compile();

    controller = module.get<TestCamelCaseController>(TestCamelCaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
