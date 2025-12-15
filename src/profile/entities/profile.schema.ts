import * as mongoose from 'mongoose';

export const FortalezasIdentificadaSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
  },
  { _id: false },
);

export const AreasAdesarrollarSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
  },
  { _id: false },
);

export const RecomendacionesPersonalizadaSchema = new mongoose.Schema(
  {
    recomendacion: { type: String, required: true },
  },
  { _id: false },
);

export const ProfileSchema = new mongoose.Schema({
  userId: { type: String, required: true },

  perfilDelJoven: { type: String, required: true },

  fortalezasIdentificadas: {
    type: [FortalezasIdentificadaSchema],
    default: [],
  },

  areasADesarrollar: {
    type: [AreasAdesarrollarSchema],
    default: [],
  },

  recomendacionesPersonalizadas: {
    type: [RecomendacionesPersonalizadaSchema],
    default: [],
  },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
