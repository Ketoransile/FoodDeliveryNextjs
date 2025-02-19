"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";

export default function AuthButtons() {
  return (
    <>
      <SignedOut>
        <SignInButton>
          <Button className="bg-buttonbg text-white rounded-xl">Sign in</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
