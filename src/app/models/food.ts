import mongoose, { Schema, Document, model } from "mongoose";
import Restaurant from "../models/restaurant";
import Category from "../models/category";
interface IFood extends Document {
  name: string;
  description?: string;
  price: number;
  image?: string;
  category: mongoose.Schema.Types.ObjectId;
  restaurant: mongoose.Schema.Types.ObjectId;
  isAvailable: boolean;
}
const models = mongoose.models;
const FoodSchema = new Schema<IFood>(
  {
    name: {
      type: String,
      required: [true, "Food name is required"],
      minlength: [3, "Food name must be at least 3 characters long"],
    },
    description: {
      type: String,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [1, "Price must be at least 1"],
    },
    image: {
      type: String,
      required: [true, "Image URL is required"],
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: Category,
      required: [true, "Category is required"],
    },
    restaurant: {
      type: Schema.Types.ObjectId,
      ref: "Restaurant",
      required: [true, "Restaurant is required"],
    },
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default models.Food || model<IFood>("Food", FoodSchema);
