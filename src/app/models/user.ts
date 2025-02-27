import mongoose, { Schema, Document, model } from "mongoose";

export interface IUser extends Document {
  clerkUserId: string; // Reference to Clerk's user ID
  name: string;
  email: string;
  role: "customer" | "restaurant_owner" | "admin";
}

const UserSchema = new Schema<IUser>(
  {
    clerkUserId: {
      type: String,
      required: [true, "Clerk User ID is required"],
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "Name must be at least 3 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    role: {
      type: String,
      enum: ["customer", "restaurant_owner", "admin"],
      default: "customer",
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || model<IUser>("User", UserSchema);
