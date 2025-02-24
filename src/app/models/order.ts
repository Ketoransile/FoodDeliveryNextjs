// import mongoose, { Schema, Document, model } from "mongoose";
// import User from "../models/user";
// import Food from "../models/food";
// export interface IOrder extends Document {
//   user: mongoose.Schema.Types.ObjectId;
//   items: {
//     food: mongoose.Schema.Types.ObjectId;
//     quantity: number;
//   }[];
//   totalPrice: number;
//   status: "pending" | "preparing" | "delivered" | "canceled";
// }
// const models = mongoose.models;
// const OrderSchema = new Schema<IOrder>(
//   {
//     user: { type: Schema.Types.ObjectId, ref: User, required: true },
//     items: [
//       {
//         food: { type: Schema.Types.ObjectId, ref: Food, required: true },
//         quantity: { type: Number, required: true, min: 1 },
//       },
//     ],
//     totalPrice: { type: Number, required: true },
//     status: {
//       type: String,
//       enum: ["pending", "preparing", "delivered", "canceled"],
//       default: "pending",
//     },
//   },
//   { timestamps: true }
// );

// export default models.Order || model<IOrder>("Order", OrderSchema);
import mongoose, { Schema, Document, model } from "mongoose";
import User from "../models/user";
import Food from "../models/food";

export interface IOrder extends Document {
  user: mongoose.Schema.Types.ObjectId; // Reference to the user who placed the order
  items: {
    food: mongoose.Schema.Types.ObjectId; // Reference to the food item
    quantity: number; // Quantity of the food item
    price: number; // Price of the food item at the time of ordering
  }[];
  totalPrice: number; // Total price of the order
  status: "pending" | "preparing" | "delivered" | "canceled"; // Order status
  address: {
    name: string;
    phoneNumber: string;
    streetName: string;
    city: string;
    state: string;
    zip: string;
  };
  payment: {
    cardNumber: string;
    cvv: string;
    holderName: string;
    expiryMonth: string;
    expiryYear: string;
  };
}

const OrderSchema = new Schema<IOrder>(
  {
    user: { type: Schema.Types.ObjectId, ref: User, required: true }, // Reference to the User model
    items: [
      {
        food: { type: Schema.Types.ObjectId, ref: Food, required: true }, // Reference to the Food model
        quantity: { type: Number, required: true, min: 1 }, // Quantity of the food item
        price: { type: Number, required: true }, // Price of the food item at the time of ordering
      },
    ],
    totalPrice: { type: Number, required: true }, // Total price of the order
    status: {
      type: String,
      enum: ["pending", "preparing", "delivered", "canceled"], // Possible order statuses
      default: "pending", // Default status is "pending"
    },
    address: {
      name: { type: String, required: true },
      phoneNumber: { type: String, required: true },
      streetName: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: String, required: true },
    },
    payment: {
      cardNumber: { type: String, required: true },
      cvv: { type: String, required: true },
      holderName: { type: String, required: true },
      expiryMonth: { type: String, required: true },
      expiryYear: { type: String, required: true },
    },
  },
  { timestamps: true } // Add createdAt and updatedAt fields
);

export default mongoose.models.Order || model<IOrder>("Order", OrderSchema);
