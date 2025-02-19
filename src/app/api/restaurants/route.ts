import dbConnect from "../../../lib/dbConnect";
import Restaurant, { IRestaurant } from "../../models/restaurant";
import { NextResponse } from "next/server";

// Get all restaurants
export async function GET(): Promise<NextResponse> {
  await dbConnect();
  const restaurants: IRestaurant[] = await Restaurant.find({}).populate(
    "foods"
  );
  return NextResponse.json(restaurants, { status: 200 });
}

// Create a new restaurant
export async function POST(req: Request): Promise<NextResponse> {
  await dbConnect();
  const { name, description, category, address, phone, image } =
    await req.json();

  const newRestaurant = new Restaurant({
    name,
    description,
    category,
    address,
    phone,
    image,
  });
  await newRestaurant.save();

  return NextResponse.json(newRestaurant, { status: 201 });
}
