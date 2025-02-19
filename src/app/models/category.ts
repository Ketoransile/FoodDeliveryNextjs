import mongoose, { Schema, Document, model } from "mongoose";

const models = mongoose.models;

export interface ICategory extends Document {
  name: string;
  description?: string;
}

const CategorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
  },
  { timestamps: true }
);

export default models.Category || model<ICategory>("Category", CategorySchema);
// export default model<ICategory>("Category", CategorySchema);
