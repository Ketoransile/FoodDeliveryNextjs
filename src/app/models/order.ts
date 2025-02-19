import mongoose, { Schema, Document, model } from "mongoose";
import User from "../models/user";
import Food from "../models/food";
export interface IOrder extends Document {
  user: mongoose.Schema.Types.ObjectId;
  items: {
    food: mongoose.Schema.Types.ObjectId;
    quantity: number;
  }[];
  totalPrice: number;
  status: "pending" | "preparing" | "delivered" | "canceled";
}
const models = mongoose.models;
const OrderSchema = new Schema<IOrder>(
  {
    user: { type: Schema.Types.ObjectId, ref: User, required: true },
    items: [
      {
        food: { type: Schema.Types.ObjectId, ref: Food, required: true },
        quantity: { type: Number, required: true, min: 1 },
      },
    ],
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "preparing", "delivered", "canceled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default models.Order || model<IOrder>("Order", OrderSchema);
