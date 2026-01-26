export class ProfileUserDto {
  perfilDelJoven: string;
  fortalezasIdentificadas: FortalezasIdentificadaDto[];
  areasADesarrollar: AreasAdesarrollarDto[];
  recomendacionesPersonalizadas: RecomendacionesPersonalizadaDto[];
}

export class FortalezasIdentificadaDto {
  nombre: string;
  descripcion: string;
}

export class AreasAdesarrollarDto {
  nombre: string;
  descripcion: string;
}

export class RecomendacionesPersonalizadaDto {
  nombre: string;
  descripcion: string;
}
