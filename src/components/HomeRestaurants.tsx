import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Restaurants from "@/app/models/restaurant";
// import dbConnect from "@/lib/dbConnect";
import HomeRestaurantCard from "./HomeRestaurantCard";
import { restaurantType } from "../app/restaurants/page";
import Link from "next/link";
export default async function HomeRestaurants() {
  // await dbConnect();
  // const restaurants: restaurantType[] = await Restaurants.find(
  //   {}
  // ).lean<restaurantType>();
  const apiUrl = process.env.PUBLIC_API_URL || "http://localhost:3000";
  const response = await fetch(`${apiUrl}/api/restaurants`, {
    next: { revalidate: 60 },
  });
  if (!response.ok) {
    throw new Error("Error while fetching categories");
  }
  // categories = response.json();
  const restaurants: restaurantType[] = await response.json();
  console.log("restaurajt resposne", restaurants);

  console.log("Restaurants from db", Restaurants);
  return (
    <div className="flex flex-col gap-8 pb-48">
      <div className="flex  gap-8 justify-between ">
        <h1 className="text-white font-bold text-xl">Restaurants Near You</h1>
        <Link
          href="/restaurants"
          className="bg-buttonbg p-4  rounded-full w-fit text-sm "
        >
          Browse all Restaurants
        </Link>
      </div>
      <div className="pt-12">
        {restaurants.length === 0 ? (
          <p>No restaurants found.</p>
        ) : (
          <div className="px-20 ">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full "
            >
              <CarouselContent>
                {restaurants.map((restaurant) => (
                  <CarouselItem
                    key={restaurant._id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className=" bg-transparent">
                        <HomeRestaurantCard
                          key={restaurant._id}
                          restaurant={restaurant}
                        />
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-transparent" />
              <CarouselNext className="bg-transparent" />
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
}
