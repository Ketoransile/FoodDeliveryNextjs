// import Restaurants from "../models/restaurant";
import dbConnect from "@/lib/dbConnect";
import HomeRestaurantCard from "../../components/HomeRestaurantCard";
import Restaurant from "../models/restaurant";
import mongoose from "mongoose";
export interface restaurantType {
  _id: string;
  name: string;
  description?: string;
  address: string;
  phone: string;
  image?: string;
  foods: mongoose.Schema.Types.ObjectId[];
}
export type RawRestaurant = {
  _id: mongoose.Schema.Types.ObjectId; // _id will be an ObjectId
  name: string;
  description?: string;
  address: string;
  phone: string;
  image?: string;
  foods: mongoose.Schema.Types.ObjectId[]; // Array of food ObjectIds
  __v: number;
  createdAt: string | Date;
  updatedAt: string | Date;
};
async function getRestaurants(): Promise<restaurantType[]> {
  let restaurants: restaurantType[] = [];
  try {
    await dbConnect();
    // Fetch all restaurants from the database
    const rawRestaurants = (await Restaurant.find()
      .lean()
      .exec()) as RawRestaurant[]; // `.lean()` returns plain JavaScript objects

    // Map each restaurant to the required structure
    restaurants = rawRestaurants.map((restaurant) => ({
      _id: restaurant._id.toString(), // Convert _id to string
      name: restaurant.name,
      description: restaurant.description, // Optional field
      address: restaurant.address,
      phone: restaurant.phone,
      image: restaurant.image, // Optional field
      foods: restaurant.foods || [], // Ensure foods is an array, even if empty
    }));

    console.log("Restaurants from database:", restaurants);
  } catch (error: Error | unknown) {
    console.error("Error fetching restaurants:", error);
  }
  return restaurants;
}
export default async function RestaurantsPage() {
  const restaurants = await getRestaurants();
  // let restaurants: restaurantType[] = [];
  // try {
  //   const apiUrl = process.env.PUBLIC_API_URL || "http://localhost:3000";
  //   const response = await fetch(`${apiUrl}/api/restaurants`, {
  //     next: { revalidate: 60 },
  //   });
  //   if (!response.ok) {
  //     throw new Error("Failed to fetch data from server");
  //   }
  //   restaurants = await response.json();
  //   console.log("Restaurants from API", restaurants);
  // } catch (error: Error | unknown) {
  //   console.error(error);
  // }

  console.log("Restaurants from api are: ", restaurants);
  return (
    <div className="pt-12">
      <h1 className="text-white font-bold text-xl pb-12">Restaurants</h1>
      {restaurants.length === 0 ? (
        <p>No restaurants found.</p>
      ) : (
        <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {restaurants.map((restaurant) => (
            <HomeRestaurantCard key={restaurant._id} restaurant={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
}
