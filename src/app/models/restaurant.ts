import mongoose, { Schema, Document, model } from "mongoose";
// import Food from "../models/food";
export interface IRestaurant extends Document {
  name: string;
  description?: string;
  address: string;
  phone: string;
  image?: string;
  foods: mongoose.Schema.Types.ObjectId[];
}
const RestaurantSchema = new Schema<IRestaurant>(
  {
    name: {
      type: String,
      required: [true, "Restaurant name is required"],
      minlength: [3, "Restaurant name must be at least 3 characters long"],
    },
    description: {
      type: String,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },

    address: {
      type: String,
      required: [true, "Address is required"],
      minlength: [5, "Address must be at least 5 characters long"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      validate: {
        validator: function (v: string) {
          return /^\+?[1-9]\d{1,14}$/.test(v); // Validates phone numbers (E.164 format)
        },
        message: "Invalid phone number format",
      },
    },
    image: {
      type: String,
      required: [true, "Image URL is required"],
    },
    // foods: [{ type: Schema.Types.ObjectId, ref: "Food" }],
    foods: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  },
  { timestamps: true }
);

export default mongoose.models.Restaurant ||
  model<IRestaurant>("Restaurant", RestaurantSchema);
// export default models.Restaurant
// ? (models.Restaurant as mongoose.Model<IRestaurant>)
// : model<IRestaurant>("Restaurant", RestaurantSchema);
