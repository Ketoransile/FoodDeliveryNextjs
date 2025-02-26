// import Food from "@/app/models/food";
// import HomeFoodCard from "@/components/HomeFoodCard";
// import mongoose from "mongoose";
// export interface IFood {
//   _id: string;
//   name: string;
//   description?: string;
//   price: number;
//   image?: string;
//   category: {
//     _id: string; // Serialized as string
//     name: string;
//     description?: string;
//     createdAt?: Date;
//     updatedAt?: Date;
//   };
//   restaurant: string; // Serialized as string
//   isAvailable: boolean;
// }
// export default async function Category({
//   params,
// }: {
//   params: Promise<{ categoryId: string }>;
// }) {
//   const { categoryId } = await params;
//   const foods: IFood[] =
//     (await Food.find({ category: categoryId }).populate("category").lean()) ||
//     [];
//   console.log("foods from", foods);
//   return (
//     <div className="flex flex-col gap-8 pt-12">
//       <h1 className="font-bold text-2xl text-white">
//         {foods[0]?.category?.name || ""}
//       </h1>
//       <div className="grid grid-cols-4 gap-8">
//         {foods.map((food) => (
//           <HomeFoodCard key={food._id.toString()} food={food} />
//         ))}
//       </div>
//     </div>
//   );
// }
// import Food from "@/app/models/food";
// import HomeFoodCard from "@/components/HomeFoodCard";
// export interface IFood {
//   _id: string;
//   name: string;
//   description?: string;
//   price: number;
//   image?: string;
//   category: {
//     _id: string; // Serialized as string
//     name: string;
//     description?: string;
//     createdAt?: Date;
//     updatedAt?: Date;
//   };
//   restaurant: string; // Serialized as string
//   isAvailable: boolean;
// }
// export default async function Category({
//   params,
// }: {
//   params: { categoryId: string };
// }) {
//   const { categoryId } = params;

//   // Fetch foods and populate the category field
//   const foods = await Food.find({ category: categoryId })
//     .populate("category")
//     .lean();

//   console.log("foods from", foods);

//   // Serialize the foods array
//   const serializedFoods: IFood[] = foods.map((food) => ({
//     _id: food._id.toString(), // Convert ObjectId to string
//     name: food.name || "",
//     description: food.description || "",
//     price: food.price || 0,
//     image: food.image || "/burger.svg",
//     category: {
//       _id: food.category._id.toString(), // Convert category ObjectId to string
//       name: food.category.name || "",
//       description: food.category.description || "",
//       createdAt: food.category.createdAt,
//       updatedAt: food.category.updatedAt,
//     },
//     restaurant: food.restaurant.toString(), // Convert restaurant ObjectId to string
//     isAvailable: food.isAvailable ?? true,
//   }));

//   console.log("serializedFoods from", serializedFoods);

//   return (
//     <div className="flex flex-col gap-8 pt-12">
//       <h1 className="font-bold text-2xl text-white">
//         {serializedFoods[0]?.category?.name || ""}
//       </h1>
//       <div className="grid grid-cols-4 gap-8">
//         {serializedFoods.map((food) => (
//           <HomeFoodCard key={food._id} food={food} />
//         ))}
//       </div>
//     </div>
//   );
// }
// import { Document, Types } from "mongoose";
import Food from "../../../app/models/food";
import HomeFoodCard from "../../../components/HomeFoodCard";
import { IFood } from "../../../stores/cartStore";
// export interface IFood {
//   _id: string;
//   name: string;
//   description?: string;
//   price: number;
//   image?: string;
//   category: {
//     _id: string;
//     name: string;
//     description?: string;
//     createdAt?: Date;
//     updatedAt?: Date;
//   };
//   restaurant: string;
//   isAvailable: boolean;
// }

// Define a type for Food documents from MongoDB
// interface IFoodDocument extends Document {
//   _id: Types.ObjectId;
//   name: string;
//   description?: string;
//   price: number;
//   image?: string;
//   category: {
//     _id: Types.ObjectId;
//     name: string;
//     description?: string;
//     createdAt?: Date;
//     updatedAt?: Date;
//   };
//   restaurant: Types.ObjectId;
//   isAvailable: boolean;
// }

export default async function Category({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await params;

  // Fetch foods and populate the category field
  const foods = await Food.find({ category: categoryId })
    .populate("category")
    .populate("restaurant")
    .lean<IFood[]>(); // Explicitly defining the type

  console.log("foods from", foods);

  // Serialize the foods array
  // const serializedFoods: IFood[] = foods.map((food) => ({
  //   _id: food._id.toString(), // Convert ObjectId to string
  //   name: food.name || "",
  //   description: food.description || "",
  //   price: food.price || 0,
  //   image: food.image || "/burger.svg",
  //   category: {
  //     _id: food.category._id.toString(), // Convert category ObjectId to string
  //     name: food.category.name || "",
  //     description: food.category.description || "",
  //     createdAt: food.category.createdAt,
  //     updatedAt: food.category.updatedAt,
  //   },
  //   restaurant: food.restaurant.toString(), // Convert restaurant ObjectId to string
  //   isAvailable: food.isAvailable ?? true,
  // }));
  const serializedFoods: IFood[] = foods.map((food) => ({
    _id: food._id.toString(), // Convert ObjectId to string
    name: food.name || "",
    description: food.description || "",
    price: food.price || 0,
    image: food.image || "/burger.svg",
    category: food.category,
    restaurant: food.restaurant, // Convert restaurant ObjectId to string
    isAvailable: food.isAvailable ?? true,
  }));
  console.log("serializedFoods from", serializedFoods);

  return (
    <div className="flex flex-col gap-8 pt-12">
      <h1 className="font-bold text-2xl text-white">
        {/* {serializedFoods[0]?.category?.name || ""} */}
      </h1>
      <div className="grid grid-cols-4 gap-8">
        {serializedFoods.map((food) => (
          <HomeFoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
}
