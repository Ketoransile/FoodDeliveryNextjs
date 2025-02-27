import Link from "next/link";
import Restaurant from "../../models/restaurant";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";
import RestaurantDetailsTabs from "@/components/RestaurantDetailsTabs";
import Image from "next/image";
// import mongoose from "mongoose";
import { IFood } from "@/stores/cartStore";
import { RawFood } from "@/components/HomeFoods";
import dbConnect from "@/lib/dbConnect";
import mongoose from "mongoose";

export interface RestaurantType {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  foods: IFood[];
}
export interface RawRestaurant {
  _id: mongoose.Types.ObjectId; // Stored as ObjectId in MongoDB
  name: string;
  description: string;
  address: string;
  phone: string;
  image: string;
  foods: RawFood[]; // Array of food items
  __v: number;
  createdAt: Date; // MongoDB stores dates as Date objects
  updatedAt: Date;
}
export default async function RestaurantDetailPage({
  params,
}: {
  params: Promise<{ restaurantId: string }>; // Explicitly typed as a plain object
}) {
  let restaurant: RawRestaurant = {
    _id: new mongoose.Types.ObjectId(),
    name: "",
    description: "",
    address: "",
    phone: "",
    image: "",
    foods: [],
    __v: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  try {
    const { restaurantId } = await params;
    console.log("restaurantId from", restaurantId);
    await dbConnect();
    restaurant = (await Restaurant.findById(restaurantId)
      .populate({
        path: "foods",
        populate: {
          path: "category",
        },
      })
      .lean()) as RawRestaurant;
  } catch (error: Error | unknown) {
    console.error("Error while fetching restuarant in details page", error);
  }
  console.log("restaurant from [restaurantId] page is", restaurant);

  const serializedRestaurant: RestaurantType = {
    _id: restaurant._id.toString(),
    name: restaurant.name,
    foods: restaurant.foods.map((food: RawFood) => ({
      _id: food._id.toString(),
      name: food.name,
      description: food.description,
      price: food.price,
      image: food.image || "/burger.svg",
      category: {
        _id: food.category._id.toString(),
        name: food.category.name,
      },
      categoryId: food.category._id.toString(),
      restaurant: food.restaurant.toString(),
      isAvailable: food.isAvailable,
    })),
    createdAt: restaurant.createdAt.toISOString(), // Convert Date to string
    updatedAt: restaurant.updatedAt.toISOString(), // Convert Date to string
  };
  // Handle missing or empty foods array
  console.log("serialized restaurant is ", serializedRestaurant);
  if (
    !serializedRestaurant ||
    !serializedRestaurant.foods ||
    serializedRestaurant.foods.length === 0
  ) {
    return (
      <p className="text-white text-center mt-10">
        No food items found for this restaurant.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-8 pt-12">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2">
          {serializedRestaurant.foods.map((food: IFood, index: number) => (
            <Image
              key={food.name}
              src={food.image || "/burger.svg"}
              width={200}
              height={200}
              alt={food.name}
              className={`object-cover rounded-xl ${
                index === 0
                  ? "md:row-span-2  md:col-span-2 w-full md:max-h-[400px] md:min-h-[400px]  "
                  : "w-[250px] h-[200px]"
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <h1>{serializedRestaurant.name}</h1>
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
        <RestaurantDetailsTabs restaurant={serializedRestaurant} />
      </div>
    </div>
  );
}
