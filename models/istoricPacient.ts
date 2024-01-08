import mongoose, { Document, model, Model, Schema } from "mongoose";

export interface IistoricPacient extends Document {
  numePacient: string;
  prenumePacient: string;
  ziuaProgramarii: string;
  istoric: string;
  pacientId: string;
  doctorId: string;
  lucrare: string;
}

const istoricPacientSchema = new Schema({
  numePacient: {
    type: String,
  },
  prenumePacient: {
    type: String,
  },
  data: {
    type: String,
  },
  istoric: {
    type: String,
  },
  pacientId: {
    type: String,
  },

  doctorId: {
    type: String,
  },
  lucrare: {
    type: String,
  },
});
export const istoricPacient = (mongoose.models.istoricPacient ||
  model("istoricPacient", istoricPacientSchema)) as Model<IistoricPacient>;
