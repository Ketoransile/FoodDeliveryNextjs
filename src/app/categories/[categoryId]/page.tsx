import Food from "@/app/models/food";
import HomeFoodCard from "@/components/HomeFoodCard";
import mongoose from "mongoose";
export interface IFood {
  _id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  category: mongoose.Schema.Types.ObjectId;
  isAvailable: boolean;
}
export default async function Category({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await params;
  const foods: IFood[] =
    (await Food.find({ category: categoryId }).populate("category").lean()) ||
    [];
  console.log("foods from", foods);
  return (
    <div className="flex flex-col gap-8 pt-12">
      <h1 className="font-bold text-2xl text-white">
        {foods[0]?.category?.name || ""}
      </h1>
      <div className="grid grid-cols-4 gap-8">
        {foods.map((food) => (
          <HomeFoodCard key={food._id.toString()} food={food} />
        ))}
      </div>
    </div>
  );
}
