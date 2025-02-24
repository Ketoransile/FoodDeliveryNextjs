import { NextRequest, NextResponse } from "next/server";
import User from "../../models/user"; // Adjust the path based on your folder structure
import dbConnect from "@/lib/dbConnect";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { clerkUserId } = await req.json(); // Get clerkUserId from request body
    console.log("Clerk id is", clerkUserId);
    if (!clerkUserId) {
      return NextResponse.json(
        { error: "clerkUserId is required" },
        { status: 400 }
      );
    }

    // Find the user by clerkUserId
    const user = await User.findOne({ clerkUserId });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Send the userId back in the response
    return NextResponse.json({ userId: user._id }, { status: 200 });
  } catch (error) {
    console.error("Error finding user:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
