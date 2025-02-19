import dbConnect from "../../../lib/dbConnect";
import Food, { IFood } from "../../models/food";
import { NextResponse } from "next/server";

// Get all foods
export async function GET() {
  try {
    await dbConnect();
    const foods = await Food.find({})
      .populate("category")
      .populate("restaurant")
      .lean();

    return NextResponse.json(foods, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: "Failed to fetch foods" },
      { status: 500 }
    );
  }
}

// Create a new food item
export async function POST(req: Request): Promise<NextResponse> {
  await dbConnect();
  const { name, description, price, image, category, restaurant, isAvailable } =
    await req.json();

  const newFood = new Food({
    name,
    description,
    price,
    image,
    category,
    restaurant,
    isAvailable,
  });
  await newFood.save();

  return NextResponse.json(newFood, { status: 201 });
}
