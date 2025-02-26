import dbConnect from "@/lib/dbConnect";
import Food from "../../../app/models/food";
import HomeFoodCard from "../../../components/HomeFoodCard";
import { IFood } from "../../../stores/cartStore";
import { RawFood } from "@/components/HomeFoods";

export default async function Category({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await params;
  await dbConnect();
  // Fetch foods and populate the category field
  const foods = (await Food.find({ category: categoryId })
    .populate("category")
    .populate("restaurant")
    .lean()
    .exec()) as RawFood[]; // Explicitly defining the type

  console.log("foods from", foods);
  const serializedFoods: IFood[] = foods.map((food) => ({
    _id: food._id.toString(), // Convert ObjectId to string
    name: food.name || "",
    description: food.description || "",
    price: food.price || 0,
    image: food.image || "/burger.svg",
    category: food.category.toString(),
    restaurant: food.restaurant.toString(), // Convert restaurant ObjectId to string
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
