import Link from "next/link";
import Restaurant from "../../models/restaurant";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";
import RestaurantDetailsTabs from "@/components/RestaurantDetailsTabs";
import Image from "next/image";
import mongoose from "mongoose";

// export interface CategoryType {
//   _id: string;
//   name: string;
// }

// export interface FoodType {
//   _id: string;
//   name: string;
//   category: CategoryType | string;
//   price: number; // Ensure this property exists
//   restaurant: string; // Ensure this matches the expected type
//   isAvailable: boolean; // Ensure this is included
// }

// export interface RestaurantType {
//   _id: string;
//   name: string;
//   foods: FoodType[];
// }
// export interface CategoryType {
//   _id: string; // Change from string to ObjectId
//   name: string;
//   description: string;
// }

export interface FoodType {
  _id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: mongoose.Schema.Types.ObjectId;
  restaurant: mongoose.Schema.Types.ObjectId;
  isAvailable: boolean;
}

export interface RestaurantType {
  _id: string;
  name: string;
  foods: FoodType[];
}
export default async function RestaurantDetailPage({
  params,
}: {
  params: Promise<{ restaurantId: string }>; // Explicitly typed as a plain object
}) {
  const { restaurantId } = await params;
  console.log("restaurantId from", restaurantId);

  const restaurant = (await Restaurant.findById(restaurantId)
    .populate({
      path: "foods",
      populate: {
        path: "category",
      },
    })
    .lean()) as RestaurantType | null;

  console.log("restaurant from", restaurant);

  // Handle missing or empty foods array
  if (!restaurant || !restaurant.foods || restaurant.foods.length === 0) {
    return (
      <p className="text-white text-center mt-10">
        No food items found for this restaurant.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-8 pt-12">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-4 gap-4">
          {restaurant.foods.map((food: FoodType, index: number) => (
            <Image
              key={food.name}
              src={food.image || "/burger.svg"}
              width={200}
              height={200}
              alt={food.name}
              className={`object-cover rounded-xl ${
                index === 0
                  ? "row-span-2 col-span-2 w-full max-h-[400px] min-h-[400px]"
                  : "w-[250px] h-[200px]"
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <h1>{restaurant.name}s</h1>
            <p className="text-slate-400">Burger, FastFood, Beverages</p>
            <p className="text-slate-400"> Austin, Texas</p>
            <div className="flex gap-4">
              <h1 className="text-red-700 font-bold text-xl">Open Now</h1>
              <h1 className="text-slate-400">10:00am-11:00pm</h1>
            </div>
            <div className="flex gap-4">
              <Link href="/" className="bg-buttonbg p-4 rounded-2xl">
                Add Review
              </Link>
              <Link href="/" className="text-slate-200 p-4">
                Share{" "}
              </Link>
            </div>
          </div>
          <div className="flex gap-4">
            <Button className="bg-buttonbg p-4 rounded-lg">
              3.6 <FaStar />
            </Button>
            <h1 className="text-slate-200 text-xs">
              96
              <p>Reviews</p>
            </h1>
          </div>
        </div>
      </div>
      <div className="">
        <RestaurantDetailsTabs restaurant={restaurant} />
      </div>
    </div>
  );
}
