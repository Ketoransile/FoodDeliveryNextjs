import dbConnect from "../../../lib/dbConnect";
import Category, { ICategory } from "../../models/category";
import { NextResponse } from "next/server";

// Get all categories
export async function GET(): Promise<NextResponse> {
  try {
    await dbConnect();
    const categories: ICategory[] = await Category.find({});
    return NextResponse.json(categories, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ status: 500, message: error.message });
  }
}

// Create a new category
export async function POST(req: Request): Promise<NextResponse> {
  await dbConnect();
  const { name, description } = await req.json();

  const newCategory = new Category({ name, description });
  await newCategory.save();

  return NextResponse.json(newCategory, { status: 201 });
}
