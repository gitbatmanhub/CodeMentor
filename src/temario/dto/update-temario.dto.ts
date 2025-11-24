import { PartialType } from '@nestjs/swagger';
import { CreateTemarioDto } from './create-temario.dto';

export class UpdateTemarioDto extends PartialType(CreateTemarioDto) {}
