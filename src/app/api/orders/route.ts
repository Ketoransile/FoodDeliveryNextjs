import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose"; // Assuming you have a utility to connect to MongoDB
import Order from "@/models/Order"; // Import your Order model

// Connect to the database
connectToDatabase();

// GET: Fetch all orders
export async function GET() {
  try {
    const orders = await Order.find()
      .populate("user", "name email") // Populate user details
      .populate("items.food", "name price"); // Populate food details in items
    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}

// POST: Create a new order
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { user, items, totalPrice, status } = body;

    // Validate required fields
    if (!user || !items || !totalPrice || !status) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create a new order
    const newOrder = new Order({
      user,
      items,
      totalPrice,
      status,
    });

    // Save the order to the database
    await newOrder.save();

    // Populate the order with user and food details
    const populatedOrder = await Order.findById(newOrder._id)
      .populate("user", "name email")
      .populate("items.food", "name price");

    return NextResponse.json(populatedOrder, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
