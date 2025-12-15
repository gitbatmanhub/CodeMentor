export interface FortalezasIdentificadaInterface {
  nombre: string;
  descripcion: string;
}

export interface AreasAdesarrollarInterface {
  nombre: string;
  descripcion: string;
}

export interface RecomendacionesPersonalizadaInterface {
  recomendacion: string;
}

export interface ProfileInterface extends Document {
  userId: string;

  perfilDelJoven: string;

  fortalezasIdentificadas: FortalezasIdentificadaInterface[];

  areasADesarrollar: AreasAdesarrollarInterface[];

  recomendacionesPersonalizadas: RecomendacionesPersonalizadaInterface[];

  createdAt: Date;
  updatedAt: Date;
}
