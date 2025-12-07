import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestCamelCaseService } from './test-camel-case.service';
import { CreateTestCamelCaseDto } from './dto/create-test-camel-case.dto';
import { UpdateTestCamelCaseDto } from './dto/update-test-camel-case.dto';

@Controller('test-camel-case')
export class TestCamelCaseController {
  constructor(private readonly testCamelCaseService: TestCamelCaseService) {}

  @Post()
  create(@Body() createTestCamelCaseDto: CreateTestCamelCaseDto) {
    return this.testCamelCaseService.create(createTestCamelCaseDto);
  }

  @Get()
  findAll() {
    return this.testCamelCaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testCamelCaseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestCamelCaseDto: UpdateTestCamelCaseDto) {
    return this.testCamelCaseService.update(+id, updateTestCamelCaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testCamelCaseService.remove(+id);
  }
}
