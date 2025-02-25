// src/app/api/submit-order/route.ts
import { NextResponse } from "next/server";
import Order from "../../models/order";
import mongoose from "mongoose";
interface Item {
  _id?: string; // Optional, if present in the database
  food: string; // Food should be a string (ID)
  quantity: number;
  price: number;
}

export async function POST(request: Request) {
  try {
    const data = await request.json(); // Get form data from the request body
    console.log("Data from frontend to backend is ", data);
    // 🛠 Ensure the user field is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(data.user)) {
      throw new Error("Invalid user ID format");
    }
    // const userObjectId = mongoose.Types.ObjectId.isValid(data.user)
    // ? new mongoose.Types.ObjectId(data.user)
    // : throw new Error('Invalid user ID format');

    // 🛠 Validate that each item has a `food` field
    console.log("data.items", data.items);
    if (!data.items.every((item: Item) => item.food)) {
      throw new Error("Each item must include a food ID.");
    }

    // Save order to the database
    const order = new Order(data);
    console.log("data from forntend", data);
    // Create a new order
    await order.save();

    return NextResponse.json(
      { message: "Order submitted successfully!", order },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting order:", error);
    return NextResponse.json(
      { message: "Failed to submit order" },
      { status: 500 }
    );
  }
}
