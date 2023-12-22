import mongoose, { Document, model, Model, Schema } from "mongoose";

export interface IistoricPacient extends Document {
  numePacient: string;
  prenumePacient: string;
  ziuaProgramarii: string;
  details: string;
  pacientId: string;
  doctorId: string;
}

const istoricPacientSchema = new Schema({
  numePacient: {
    type: String,
  },
  prenumePacient: {
    type: String,
  },
  ziuaProgramarii: {
    type: String,
  },
  details: {
    type: String,
  },
  pacientId: {
    type: String,
  },

  doctorId: {
    type: String,
  },
});
export const istoricPacient = (mongoose.models.istoricPacient ||
  model("istoricPacient", istoricPacientSchema)) as Model<IistoricPacient>;
