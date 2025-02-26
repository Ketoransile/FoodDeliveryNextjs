import HomeFoodCard from "./HomeFoodCard";
import { IFood } from "../stores/cartStore";
import Food from "../app/models/food";
import mongoose from "mongoose";
import dbConnect from "@/lib/dbConnect";

// Define the Mongoose document type
export type RawFood = {
  _id: mongoose.Types.ObjectId; // _id will be a string after .toString()
  name: string;
  description: string;
  price: number;
  image?: string;
  // category: mongoose.Schema.Types.ObjectId;
  category: {
    _id: string;
    name: string;
    description: string;
    createdAt: string; // or Date if you convert it
    updatedAt: string; // or Date if you convert it
    __v: number;
  };
  restaurant: mongoose.Schema.Types.ObjectId;
  isAvailable: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
  __v: number;
};
async function getFoods(): Promise<IFood[]> {
  let foods: IFood[] = [];
  try {
    await dbConnect();
    const rawFoods = (await Food.find()
      .populate("category")
      .lean()
      .exec()) as RawFood[];
    foods = rawFoods.map((food: RawFood) => ({
      _id: food._id.toString(), // Convert _id to string
      name: food.name,
      description: food.description,
      price: food.price,
      image: food.image, // Optional field, can be undefined
      // category: food.category.toString(), // This will be an ObjectId (MongoDB reference)
      category: { _id: food.category._id.toString(), name: food.category.name },
      categoryId: food.category._id.toString(), // For storage in the cart
      restaurant: food.restaurant.toString(), // This will be an ObjectId (MongoDB reference)
      isAvailable: food.isAvailable,
    }));

    console.log("foods from homefoods are", foods);
  } catch (error) {
    console.error(error);
  }
  return foods;
}
export default async function HomeFoods() {
  const foods: IFood[] = await getFoods();
  return (
    <div className="grid grid-cols-5 gap-8 pb-48">
      {foods.slice(0, 10).map((food) => (
        <HomeFoodCard key={food._id.toString()} food={food} />
      ))}
    </div>
  );
}
