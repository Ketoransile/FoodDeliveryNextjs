// import { NextRequest, NextResponse } from "next/server";
// import dbConnect from "../../../../lib/dbConnect";
// import Order from "../../../models/order"; // Ensure correct import path

// export async function GET(
//   req: NextRequest,
//   { params }: { params: { userId: string } }
// ) {
//   try {
//     console.log("Connecting to database...");
//     await dbConnect(); // Ensure database connection

//     const { userId } = await params;
//     console.log("Fetching orders for userId:", userId);

//     if (!userId) {
//       console.error("User ID is required");
//       return NextResponse.json(
//         { message: "User ID is required" },
//         { status: 400 }
//       );
//     }

//     const orders = await Order.find({ user: userId })

//       .sort({ createdAt: -1 })
//       .populate({
//         path: "items.food", // Populate the food field in the items array
//         // select: "name price description",
//       }); // Fetch orders for user
//     console.log("Orders fetched:", orders);

//     return NextResponse.json(orders, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     return NextResponse.json(
//       { message: "Failed to fetch orders" },
//       { status: 500 }
//     );
//   }
// }
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import Order from "../../../models/order"; // Ensure correct import path

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> } // Correctly typed params
) {
  try {
    console.log("Connecting to database...");
    await dbConnect(); // Ensure database connection

    const { userId } = await params; // Destructure params directly (no `await`)
    console.log("Fetching orders for userId:", userId);

    if (!userId) {
      console.error("User ID is required");
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    const orders = await Order.find({ user: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "items.food", // Populate the food field in the items array
      }); // Fetch orders for user

    console.log("Orders fetched:", orders);
    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { message: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}
