import dbConnect from "../../../lib/dbConnect";
import User from "../../models/user";
import { WebhookEvent } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
  const body = await req.json();
  const event = body as WebhookEvent;

  if (event.type === "user.created") {
    await dbConnect();

    const { id, email_addresses, first_name, last_name } = event.data;

    const email = email_addresses[0]?.email_address || "";

    if (!email) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const newUser = new User({
        clerkUserId: id,
        name: `${first_name} ${last_name}`.trim(),
        email,
      });

      await newUser.save();
    }
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
