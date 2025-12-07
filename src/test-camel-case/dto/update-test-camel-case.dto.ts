import { PartialType } from '@nestjs/swagger';
import { CreateTestCamelCaseDto } from './create-test-camel-case.dto';

export class UpdateTestCamelCaseDto extends PartialType(CreateTestCamelCaseDto) {}
