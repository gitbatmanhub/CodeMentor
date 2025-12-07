import { Module } from '@nestjs/common';
import { TestCamelCaseService } from './test-camel-case.service';
import { TestCamelCaseController } from './test-camel-case.controller';

@Module({
  controllers: [TestCamelCaseController],
  providers: [TestCamelCaseService],
})
export class TestCamelCaseModule {}
