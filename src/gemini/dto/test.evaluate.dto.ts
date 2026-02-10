import { IsString, IsUUID } from 'class-validator';

export class TestEvaluateDto {
  @IsString()
  enunciado: string;

  @IsString()
  respuesta: string;

  @IsUUID()
  idUnidad: string;
}
