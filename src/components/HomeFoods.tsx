import mongoose from "mongoose";
import HomeFoodCard from "./HomeFoodCard";
export interface IFood {
  _id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  category: mongoose.Schema.Types.ObjectId;
  restaurant: mongoose.Schema.Types.ObjectId;
  isAvailable: boolean;
}
async function getFoods(): Promise<IFood[]> {
  let foods: IFood[] = [];
  try {
    // foods = await Food.find({})
    //   .lean()
    //   .cache({ next: { revalidate: 60 } });
    const apiUrl = process.env.PUBLIC_API_URL || "http://localhost:3000";
    const response = await fetch(`${apiUrl}/api/foods`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error("Error while fetching foods");
    }
    console.log(response);
    foods = await response.json();
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
