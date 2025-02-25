// import Restaurants from "../models/restaurant";
import HomeRestaurantCard from "@/components/HomeRestaurantCard";

export interface restaurantType {
  _id: string;
  name: string;
  description?: string;
  address: string;
  phone: string;
  image?: string;
  foods: [];
}
export default async function RestaurantsPage() {
  let restaurants: restaurantType[] = [];
  try {
    const apiUrl = process.env.PUBLIC_API_URL || "http://localhost:3000";
    const response = await fetch(`${apiUrl}/api/restaurants`, {
      next: { revalidate: 60 },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data from server");
    }
    restaurants = await response.json();
    console.log("Restaurants from API", restaurants);
  } catch (error: Error | unknown) {
    console.error(error);
  }

  console.log("Restaurants from api are: ", restaurants);
  return (
    <div className="pt-12">
      <h1 className="text-white font-bold text-xl pb-12">Restaurants</h1>
      {restaurants.length === 0 ? (
        <p>No restaurants found.</p>
      ) : (
        <div className="grid grid-cols-4 gap-8">
          {restaurants.map((restaurant) => (
            <HomeRestaurantCard key={restaurant._id} restaurant={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
}
