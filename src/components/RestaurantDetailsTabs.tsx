import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
// import mongoose from "mongoose";
import { IFood } from "../stores/cartStore";
import Category from "../app/models/category";
import RestaurantDetailCard from "./RestaurantDetailCard";
import dbConnect from "@/lib/dbConnect";

interface RestaurantType {
  _id: string;
  name: string;
  foods: IFood[];
}

interface RestaurantDetailsTabsProps {
  restaurant: RestaurantType;
}

export default async function RestaurantDetailsTabs({
  restaurant,
}: RestaurantDetailsTabsProps) {
  console.log("restaurant from props", restaurant);
  await dbConnect();
  // Fetch categories and convert _id to string
  const categories = await Category.find({}).lean();
  console.log("categories from restaurant details page are", categories);

  // Extract unique category names safely
  const categoryNames: string[] = Array.from(
    new Set(
      restaurant.foods
        .map((food) =>
          typeof food.category === "object" && "name" in food.category
            ? String(food.category.name)
            : undefined
        )
        .filter((name): name is string => Boolean(name)) // Ensure valid strings
    )
  );

  return (
    <Tabs defaultValue="recommended" className="w-full">
      <TabsList className="flex justify-start gap-8 bg-transparent p-0">
        <TabsTrigger value="recommended">Recommended</TabsTrigger>

        {categoryNames.map((categoryName) => (
          <TabsTrigger key={categoryName} value={categoryName}>
            {categoryName}
          </TabsTrigger>
        ))}
      </TabsList>

      {categoryNames.map((categoryName) => (
        <TabsContent value={categoryName} key={categoryName}>
          {restaurant.foods
            .filter(
              (food) =>
                typeof food.category === "object" &&
                "name" in food.category &&
                food.category.name === categoryName
            )
            .map((food) => (
              <Card
                key={String(food._id)} // Ensure _id is a string
                className="bg-gradient-to-br backdrop-blur-3xl from-white/30 to-transparent border border-slate-700"
              >
                <RestaurantDetailCard
                  food={{
                    ...food,
                    _id: String(food._id), // Explicitly cast _id to string
                    description: food.description || "No description available", // Ensure description is always a string
                  }}
                />
              </Card>
            ))}
        </TabsContent>
      ))}

      <TabsContent value="recommended">
        {restaurant.foods.map((food) => (
          <Card
            key={String(food._id)} // Ensure _id is a string
            className="bg-gradient-to-br backdrop-blur-3xl from-white/30 to-transparent border border-slate-700 gap-4"
          >
            <RestaurantDetailCard
              food={{
                ...food,
                _id: String(food._id), // Explicitly cast _id to string
                description: food.description || "No description available", // Ensure description is always a string
              }}
            />
          </Card>
        ))}
      </TabsContent>
    </Tabs>
  );
}
