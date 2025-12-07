import { Injectable } from '@nestjs/common';
import { CreateTestCamelCaseDto } from './dto/create-test-camel-case.dto';
import { UpdateTestCamelCaseDto } from './dto/update-test-camel-case.dto';

@Injectable()
export class TestCamelCaseService {
  create(createTestCamelCaseDto: CreateTestCamelCaseDto) {
    return 'This action adds a new testCamelCase';
  }

  findAll() {
    return `This action returns all testCamelCase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testCamelCase`;
  }

  update(id: number, updateTestCamelCaseDto: UpdateTestCamelCaseDto) {
    return `This action updates a #${id} testCamelCase`;
  }

  remove(id: number) {
    return `This action removes a #${id} testCamelCase`;
  }
}
