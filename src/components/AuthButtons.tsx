"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import { AiFillProfile } from "react-icons/ai";
export default function AuthButtons() {
  return (
    <>
      <SignedOut>
        <SignInButton>
          <Button className="bg-buttonbg text-white rounded-xl">Sign in</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Link
              label="Order History"
              labelIcon={<AiFillProfile />}
              href="/order-history"
            />
          </UserButton.MenuItems>
        </UserButton>
      </SignedIn>
    </>
  );
}
