import HomeFoodCard from "./HomeFoodCard";
import { IFood } from "../stores/cartStore";
import Food from "../app/models/food";
import mongoose from "mongoose";
import dbConnect from "@/lib/dbConnect";
// export interface IFood {
//   _id: string;
//   name: string;
//   description?: string;
//   price: number;
//   image?: string;
//   category: mongoose.Schema.Types.ObjectId;
//   restaurant: mongoose.Schema.Types.ObjectId;
//   isAvailable: boolean;
// }
// import { Document } from "mongoose";

// Define the Mongoose document type
type RawFood = {
  _id: string; // _id will be a string after .toString()
  name: string;
  description: string;
  price: number;
  image?: string;
  category: mongoose.Schema.Types.ObjectId;
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
    const rawFoods = (await Food.find().lean().exec()) as RawFood[];
    foods = rawFoods.map((food: RawFood) => ({
      _id: food._id.toString(), // Convert _id to string
      name: food.name,
      description: food.description,
      price: food.price,
      image: food.image, // Optional field, can be undefined
      category: food.category, // This will be an ObjectId (MongoDB reference)
      restaurant: food.restaurant, // This will be an ObjectId (MongoDB reference)
      isAvailable: food.isAvailable,
    }));
    // foods = foods as IFood[];
    // .cache({ next: { revalidate: 60 } });
    // const apiUrl = process.env.PUBLIC_API_URL || "http://localhost:3000";
    // const response = await fetch(`${apiUrl}/api/foods`, {
    //   next: { revalidate: 60 },
    // });

    // if (!response.ok) {
    //   throw new Error("Error while fetching foods");
    // }
    // console.log(response);
    // foods = await response.json();
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
