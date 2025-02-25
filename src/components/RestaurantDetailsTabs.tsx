// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { restaurantType } from "@/app/restaurants/page";
// import Category from "../app/models/category";
// import RestaurantDetailCard from "./RestaurantDetailCard";
// export default async function RestaurantDetailsTabs({
//   restaurant,
// }: {
//   restaurant: restaurantType;
// }) {
//   // const { restaurantId } = restaurant;
//   console.log("restaurant from props", restaurant);
//   const categories = await Category.find({}).lean();
//   console.log("categories from restuarnat details page is ", categories);
//   return (
//     <Tabs defaultValue="recommended" className="w-full ">
//       <TabsList className={`flex justify-start gap-8 bg-transparent p-0`}>
//         <TabsTrigger value="recommended">Recommended</TabsTrigger>
//         {categories.map((category) => (
//           <TabsTrigger value={`${category.name}`} key={category._id}>
//             {category.name}
//           </TabsTrigger>
//         ))}
//       </TabsList>
//       {restaurant.foods.map((food: any) => (
//         <TabsContent value={`${food.category.name}`} key={food._id}>
//           <Card className=" bg-gradient-to-br backdrop-blur-3xl  from-white/30 to-transparent border border-slate-700 ">
//             <RestaurantDetailCard key={food._id} food={food} />
//           </Card>
//         </TabsContent>
//       ))}
//       {restaurant.foods.map((food: any) => (
//         <TabsContent value="recommended" key={food._id}>
//           <Card
//             className=" bg-gradient-to-br backdrop-blur-3xl  from-white/30 to-transparent border border-slate-700 gap-4"
//             key={food._id}
//           >
//             <RestaurantDetailCard key={food._id} food={food} />
//           </Card>
//         </TabsContent>
//       ))}
//     </Tabs>
//   );
// }
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { RestaurantType, FoodType, CategoryType } from "@/types"; // Make sure to define these types
// import Category from "../app/models/category";
// import RestaurantDetailCard from "./RestaurantDetailCard";

// interface RestaurantDetailsTabsProps {
//   restaurant: RestaurantType;
// }

// export default async function RestaurantDetailsTabs({
//   restaurant,
// }: RestaurantDetailsTabsProps) {
//   console.log("restaurant from props", restaurant);

//   // Fetch the categories
//   const categories = await Category.find({}).lean();
//   console.log("categories from restaurant details page is ", categories);

//   return (
//     <Tabs defaultValue="recommended" className="w-full ">
//       <TabsList className={`flex justify-start gap-8 bg-transparent p-0`}>
//         <TabsTrigger value="recommended">Recommended</TabsTrigger>
//         {categories.map((category: CategoryType) => (
//           <TabsTrigger value={`${category.name}`} key={category._id}>
//             {category.name}
//           </TabsTrigger>
//         ))}
//       </TabsList>
//       {restaurant.foods.map((food: FoodType) => (
//         <TabsContent value={`${food.category.name}`} key={food._id}>
//           <Card className=" bg-gradient-to-br backdrop-blur-3xl  from-white/30 to-transparent border border-slate-700 ">
//             <RestaurantDetailCard key={food._id} food={food} />
//           </Card>
//         </TabsContent>
//       ))}
//       {restaurant.foods.map((food: FoodType) => (
//         <TabsContent value="recommended" key={food._id}>
//           <Card
//             className=" bg-gradient-to-br backdrop-blur-3xl  from-white/30 to-transparent border border-slate-700 gap-4"
//             key={food._id}
//           >
//             <RestaurantDetailCard key={food._id} food={food} />
//           </Card>
//         </TabsContent>
//       ))}
//     </Tabs>
//   );
// }
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { RestaurantType, FoodType, CategoryType } from "@/types"; // Make sure these types are correct
// import Category from "../app/models/category";
// import RestaurantDetailCard from "./RestaurantDetailCard";

// // Define types for RestaurantDetailsTabsProps
// interface RestaurantDetailsTabsProps {
//   restaurant: RestaurantType;
// }

// export default async function RestaurantDetailsTabs({
//   restaurant,
// }: RestaurantDetailsTabsProps) {
//   console.log("restaurant from props", restaurant);

//   // Fetch categories for the restaurant
//   const categories = await Category.find({}).lean();
//   console.log("categories from restaurant details page are", categories);

//   // Create an array of category names from restaurant's foods
//   const categoryNames = [
//     ...new Set(restaurant.foods.map((food) => food.category.name)),
//   ];

//   return (
//     <Tabs defaultValue="recommended" className="w-full">
//       <TabsList className="flex justify-start gap-8 bg-transparent p-0">
//         <TabsTrigger value="recommended">Recommended</TabsTrigger>

//         {/* Create tab triggers dynamically for categories */}
//         {categoryNames.map((categoryName) => (
//           <TabsTrigger key={categoryName} value={categoryName}>
//             {categoryName}
//           </TabsTrigger>
//         ))}
//       </TabsList>

//       {/* Map foods to the corresponding category */}
//       {categoryNames.map((categoryName) => (
//         <TabsContent value={categoryName} key={categoryName}>
//           {restaurant.foods
//             .filter((food) => food.category.name === categoryName)
//             .map((food: FoodType) => (
//               <Card
//                 key={food._id}
//                 className="bg-gradient-to-br backdrop-blur-3xl from-white/30 to-transparent border border-slate-700"
//               >
//                 <RestaurantDetailCard key={food._id} food={food} />
//               </Card>
//             ))}
//         </TabsContent>
//       ))}

//       {/* Recommended Tab */}
//       <TabsContent value="recommended">
//         {restaurant.foods.map((food: FoodType) => (
//           <Card
//             key={food._id}
//             className="bg-gradient-to-br backdrop-blur-3xl from-white/30 to-transparent border border-slate-700 gap-4"
//           >
//             <RestaurantDetailCard key={food._id} food={food} />
//           </Card>
//         ))}
//       </TabsContent>
//     </Tabs>
//   );
// }
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Card } from "@/components/ui/card";
// import {
//   RestaurantType,
//   FoodType,
//   CategoryType,
// } from "../app/restaurants/[restaurantId]/page";
// import Category from "../app/models/category";
// import RestaurantDetailCard from "./RestaurantDetailCard";

// interface RestaurantDetailsTabsProps {
//   restaurant: RestaurantType;
// }

// export default async function RestaurantDetailsTabs({
//   restaurant,
// }: RestaurantDetailsTabsProps) {
//   console.log("restaurant from props", restaurant);

//   // Fetch categories
//   const categories: CategoryType[] = await Category.find({})
//     .lean()
//     .then((data) =>
//       data.map((category) => ({
//         _id: String(category._id), // Convert ObjectId to string
//         name: category.name as string, // Ensure 'name' is correctly typed
//       }))
//     );

//   console.log("categories from restaurant details page are", categories);

//   // Extract unique category names from restaurant foods
//   // const categoryNames: string[] = [
//   //   ...new Set(restaurant.foods.map((food: FoodType) => food.category.name)),
//   // ];
//   const categoryNames: string[] = Array.from(
//     new Set(
//       restaurant.foods.map((food: FoodType) =>
//         typeof food.category === "string" ? food.category : food.category.name
//       )
//     )
//   );

//   return (
//     <Tabs defaultValue="recommended" className="w-full">
//       <TabsList className="flex justify-start gap-8 bg-transparent p-0">
//         <TabsTrigger value="recommended">Recommended</TabsTrigger>

//         {categoryNames.map((categoryName: string) => (
//           <TabsTrigger key={categoryName} value={categoryName}>
//             {categoryName}
//           </TabsTrigger>
//         ))}
//       </TabsList>

//       {categoryNames.map((categoryName: string) => (
//         <TabsContent value={categoryName} key={categoryName}>
//           {restaurant.foods
//             .filter((food: FoodType) => food.category.name === categoryName)
//             .map((food: FoodType) => (
//               <Card
//                 key={food._id}
//                 className="bg-gradient-to-br backdrop-blur-3xl from-white/30 to-transparent border border-slate-700"
//               >
//                 <RestaurantDetailCard food={food} />
//               </Card>
//             ))}
//         </TabsContent>
//       ))}

//       <TabsContent value="recommended">
//         {restaurant.foods.map((food: FoodType) => (
//           <Card
//             key={food._id}
//             className="bg-gradient-to-br backdrop-blur-3xl from-white/30 to-transparent border border-slate-700 gap-4"
//           >
//             <RestaurantDetailCard food={food} />
//           </Card>
//         ))}
//       </TabsContent>
//     </Tabs>
//   );
// }
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Card } from "@/components/ui/card";
// import {
//   RestaurantType,
//   FoodType,
//   CategoryType,
// } from "../app/restaurants/[restaurantId]/page";
// import Category from "../app/models/category";
// import RestaurantDetailCard from "./RestaurantDetailCard";

// interface RestaurantDetailsTabsProps {
//   restaurant: RestaurantType;
// }

// export default async function RestaurantDetailsTabs({
//   restaurant,
// }: RestaurantDetailsTabsProps) {
//   console.log("restaurant from props", restaurant);

//   // Fetch categories
//   const categories: CategoryType[] = await Category.find({})
//     .lean()
//     .then((data) =>
//       data.map((category) => ({
//         _id: String(category._id), // Convert ObjectId to string
//         name: category.name as string, // Ensure 'name' is correctly typed
//       }))
//     );
//   console.log("categories from restaurant details page are", categories);

//   // Extract unique category names safely
//   const categoryNames: string[] = Array.from(
//     new Set(
//       restaurant.foods.map((food: FoodType) =>
//         typeof food.category === "string"
//           ? food.category
//           : food.category?.name || "Unknown"
//       )
//     )
//   );

//   return (
//     <Tabs defaultValue="recommended" className="w-full">
//       <TabsList className="flex justify-start gap-8 bg-transparent p-0">
//         <TabsTrigger value="recommended">Recommended</TabsTrigger>

//         {categoryNames.map((categoryName: string) => (
//           <TabsTrigger key={categoryName} value={categoryName}>
//             {categoryName}
//           </TabsTrigger>
//         ))}
//       </TabsList>

//       {categoryNames.map((categoryName: string) => (
//         <TabsContent value={categoryName} key={categoryName}>
//           {restaurant.foods
//             .filter((food: FoodType) =>
//               typeof food.category === "string"
//                 ? food.category === categoryName
//                 : food.category?.name === categoryName
//             )
//             .map((food: FoodType) => (
//               <Card
//                 key={food._id}
//                 className="bg-gradient-to-br backdrop-blur-3xl from-white/30 to-transparent border border-slate-700"
//               >
//                 <RestaurantDetailCard
//                   food={{
//                     ...food,
//                     category:
//                       typeof food.category === "string"
//                         ? food.category
//                         : food.category?._id,
//                   }}
//                 />
//               </Card>
//             ))}
//         </TabsContent>
//       ))}

//       <TabsContent value="recommended">
//         {restaurant.foods.map((food: FoodType) => (
//           <Card
//             key={food._id}
//             className="bg-gradient-to-br backdrop-blur-3xl from-white/30 to-transparent border border-slate-700 gap-4"
//           >
//             <RestaurantDetailCard
//               food={{
//                 ...food,
//                 category:
//                   typeof food.category === "string"
//                     ? food.category
//                     : food.category?._id,
//               }}
//             />
//           </Card>
//         ))}
//       </TabsContent>
//     </Tabs>
//   );
// }
// import mongoose from "mongoose";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Card } from "@/components/ui/card";
// import {
//   RestaurantType,
//   FoodType,
//   CategoryType,
// } from "../app/restaurants/[restaurantId]/page";
// import Category from "../app/models/category";
// import RestaurantDetailCard from "./RestaurantDetailCard";

// interface RestaurantDetailsTabsProps {
//   restaurant: RestaurantType;
// }

// export default async function RestaurantDetailsTabs({
//   restaurant,
// }: RestaurantDetailsTabsProps) {
//   console.log("restaurant from props", restaurant);

//   // Fetch categories
//   // const categories: CategoryType[] = await Category.find({}).lean();
//   const categories: CategoryType[] = await Category.find({})
//     .lean()
//     .then((data) =>
//       data.map((category) => ({
//         _id: category._id as mongoose.Types.ObjectId, // Ensure correct typing
//         name: category.name as string, // Explicitly assert name
//       }))
//     );

//   console.log("categories from restaurant details page are", categories);

//   // Extract unique category names safely
//   const categoryNames: string[] = Array.from(
//     new Set(
//       restaurant.foods.map((food: FoodType) =>
//         typeof food.category === "string"
//           ? food.category
//           : food.category?.name || "Unknown"
//       )
//     )
//   );

//   return (
//     <Tabs defaultValue="recommended" className="w-full">
//       <TabsList className="flex justify-start gap-8 bg-transparent p-0">
//         <TabsTrigger value="recommended">Recommended</TabsTrigger>

//         {categoryNames.map((categoryName: string) => (
//           <TabsTrigger key={categoryName} value={categoryName}>
//             {categoryName}
//           </TabsTrigger>
//         ))}
//       </TabsList>

//       {categoryNames.map((categoryName: string) => (
//         <TabsContent value={categoryName} key={categoryName}>
//           {restaurant.foods
//             .filter((food: FoodType) =>
//               typeof food.category === "string"
//                 ? food.category === categoryName
//                 : food.category?.name === categoryName
//             )
//             .map((food: FoodType) => (
//               <Card
//                 key={food._id}
//                 className="bg-gradient-to-br backdrop-blur-3xl from-white/30 to-transparent border border-slate-700"
//               >
//                 <RestaurantDetailCard
//                   food={{
//                     ...food,
//                     category:
//                       typeof food.category === "string"
//                         ? new mongoose.Types.ObjectId(food.category) // Convert to ObjectId
//                         : food.category?._id || new mongoose.Types.ObjectId(),
//                   }}
//                 />
//               </Card>
//             ))}
//         </TabsContent>
//       ))}

//       <TabsContent value="recommended">
//         {restaurant.foods.map((food: FoodType) => (
//           <Card
//             key={food._id}
//             className="bg-gradient-to-br backdrop-blur-3xl from-white/30 to-transparent border border-slate-700 gap-4"
//           >
//             <RestaurantDetailCard
//               food={{
//                 ...food,
//                 category:
//                   typeof food.category === "string"
//                     ? new mongoose.Types.ObjectId(food.category)
//                     : food.category?._id || new mongoose.Types.ObjectId(),
//               }}
//             />
//           </Card>
//         ))}
//       </TabsContent>
//     </Tabs>
//   );
// }
// import mongoose from "mongoose";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Card } from "@/components/ui/card";
// import {
//   RestaurantType,
//   FoodType,
//   CategoryType,
// } from "../app/restaurants/[restaurantId]/page";
// import Category from "../app/models/category";
// import RestaurantDetailCard from "./RestaurantDetailCard";

// interface RestaurantDetailsTabsProps {
//   restaurant: RestaurantType;
// }

// export default async function RestaurantDetailsTabs({
//   restaurant,
// }: RestaurantDetailsTabsProps) {
//   console.log("restaurant from props", restaurant);

//   // Fetch categories and ensure correct typing
//   const categories: CategoryType[] = await Category.find({})
//     .lean()
//     .then((data) =>
//       data.map((category) => ({
//         _id: new mongoose.Types.ObjectId(category._id), // Ensure ObjectId type
//         name: category.name as string, // Ensure correct type
//       }))
//     );
//   console.log("categories from restaurant details page are", categories);

//   // Extract unique category names safely
//   const categoryNames: string[] = Array.from(
//     new Set(
//       restaurant.foods.map((food: FoodType) =>
//         typeof food.category === "string"
//           ? food.category
//           : food.category?.name || "Unknown"
//       )
//     )
//   );

//   return (
//     <Tabs defaultValue="recommended" className="w-full">
//       <TabsList className="flex justify-start gap-8 bg-transparent p-0">
//         <TabsTrigger value="recommended">Recommended</TabsTrigger>

//         {categoryNames.map((categoryName: string) => (
//           <TabsTrigger key={categoryName} value={categoryName}>
//             {categoryName}
//           </TabsTrigger>
//         ))}
//       </TabsList>

//       {categoryNames.map((categoryName: string) => (
//         <TabsContent value={categoryName} key={categoryName}>
//           {restaurant.foods
//             .filter((food: FoodType) =>
//               typeof food.category === "string"
//                 ? food.category === categoryName
//                 : food.category?.name === categoryName
//             )
//             .map((food: FoodType) => (
//               <Card
//                 key={food._id}
//                 className="bg-gradient-to-br backdrop-blur-3xl from-white/30 to-transparent border border-slate-700"
//               >
//                 <RestaurantDetailCard
//                   food={{
//                     ...food,
//                     category:
//                       typeof food.category === "string"
//                         ? new mongoose.Types.ObjectId(food.category)
//                         : food.category?._id || new mongoose.Types.ObjectId(),
//                   }}
//                 />
//               </Card>
//             ))}
//         </TabsContent>
//       ))}

//       <TabsContent value="recommended">
//         {restaurant.foods.map((food: FoodType) => (
//           <Card
//             key={food._id}
//             className="bg-gradient-to-br backdrop-blur-3xl from-white/30 to-transparent border border-slate-700 gap-4"
//           >
//             <RestaurantDetailCard
//               food={{
//                 ...food,
//                 category:
//                   typeof food.category === "string"
//                     ? new mongoose.Types.ObjectId(food.category)
//                     : food.category?._id || new mongoose.Types.ObjectId(),
//               }}
//             />
//           </Card>
//         ))}
//       </TabsContent>
//     </Tabs>
//   );
// }
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Card } from "@/components/ui/card";
// import {
//   RestaurantType,
//   FoodType,
//   // CategoryType,
// } from "../app/restaurants/[restaurantId]/page";
// import Category from "../app/models/category";
// import RestaurantDetailCard from "./RestaurantDetailCard";

// interface RestaurantDetailsTabsProps {
//   restaurant: RestaurantType;
// }

// export default async function RestaurantDetailsTabs({
//   restaurant,
// }: RestaurantDetailsTabsProps) {
//   console.log("restaurant from props", restaurant);

//   // Fetch categories and convert _id to string
//   const categories = await Category.find({}).lean();

//   console.log("categories from restaurant details page are", categories);

//   // Extract unique category names safely
//   const categoryNames: string[] = Array.from(
//     new Set(
//       restaurant.foods.map((food: FoodType) =>
//         typeof food.category === "object" && "name" in food.category
//           ? food.category.name
//           : "Unknown"
//       )
//     )
//   );

//   return (
//     <Tabs defaultValue="recommended" className="w-full">
//       <TabsList className="flex justify-start gap-8 bg-transparent p-0">
//         <TabsTrigger value="recommended">Recommended</TabsTrigger>

//         {categoryNames.map((categoryName: string) => (
//           <TabsTrigger key={categoryName} value={categoryName}>
//             {categoryName}
//           </TabsTrigger>
//         ))}
//       </TabsList>

//       {categoryNames.map((categoryName: string) => (
//         <TabsContent value={categoryName} key={categoryName}>
//           {restaurant.foods
//             .filter((food: FoodType) =>
//               typeof food.category === "object" && "name" in food.category
//                 ? food.category.name === categoryName
//                 : false
//             )
//             .map((food: FoodType) => (
//               <Card
//                 key={food._id.toString()} // Convert ObjectId to string
//                 className="bg-gradient-to-br backdrop-blur-3xl from-white/30 to-transparent border border-slate-700"
//               >
//                 <RestaurantDetailCard food={food} />
//               </Card>
//             ))}
//         </TabsContent>
//       ))}

//       <TabsContent value="recommended">
//         {restaurant.foods.map((food: FoodType) => (
//           <Card
//             key={food._id.toString()} // Convert ObjectId to string
//             className="bg-gradient-to-br backdrop-blur-3xl from-white/30 to-transparent border border-slate-700 gap-4"
//           >
//             <RestaurantDetailCard food={food} />
//           </Card>
//         ))}
//       </TabsContent>
//     </Tabs>
//   );
// }
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
// import mongoose from "mongoose";
import { IFood } from "../stores/cartStore";
import Category from "../app/models/category";
import RestaurantDetailCard from "./RestaurantDetailCard";

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
