import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { restaurantType } from "@/app/restaurants/page";
import Category from "../app/models/category";
import RestaurantDetailCard from "./RestaurantDetailCard";
import { IFood } from "@/stores/cartStore";
export default async function RestaurantDetailsTabs({
  restaurant,
}: {
  restaurant: restaurantType;
}) {
  // const { restaurantId } = restaurant;
  console.log("restaurant from props", restaurant);
  const categories = await Category.find({}).lean();
  console.log("categories from restuarnat details page is ", categories);
  return (
    <Tabs defaultValue="recommended" className="w-full ">
      <TabsList className={`flex justify-start gap-8 bg-transparent p-0`}>
        <TabsTrigger value="recommended">Recommended</TabsTrigger>
        {categories.map((category) => (
          <TabsTrigger value={`${category.name}`} key={category._id}>
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {restaurant.foods.map((food: IFood) => (
        <TabsContent value={`${food.category.name}`} key={food._id}>
          <Card className=" bg-gradient-to-br backdrop-blur-3xl  from-white/30 to-transparent border border-slate-700 ">
            <RestaurantDetailCard key={food._id} food={food} />
          </Card>
        </TabsContent>
      ))}
      {restaurant.foods.map((food: IFood) => (
        <TabsContent value="recommended" key={food._id}>
          <Card
            className=" bg-gradient-to-br backdrop-blur-3xl  from-white/30 to-transparent border border-slate-700 gap-4"
            key={food._id}
          >
            <RestaurantDetailCard key={food._id} food={food} />
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}
