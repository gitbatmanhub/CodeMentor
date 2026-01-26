export interface FortalezasIdentificadaInterface {
  nombre: string;
  descripcion: string;
}

export interface AreasAdesarrollarInterface {
  nombre: string;
  descripcion: string;
}

export interface RecomendacionesPersonalizadaInterface {
  nombre: string;
  descripcion: string;
}

export interface ProfileInterface {
  userId: string;

  perfilDelJoven: string;

  fortalezasIdentificadas: FortalezasIdentificadaInterface[];

  areasADesarrollar: AreasAdesarrollarInterface[];

  recomendacionesPersonalizadas: RecomendacionesPersonalizadaInterface[];

  createdAt: Date;
  updatedAt: Date;
}

export interface ProfileCompleteInterface extends ProfileInterface {
  nombreCompleto: string;
  email: string;
}
