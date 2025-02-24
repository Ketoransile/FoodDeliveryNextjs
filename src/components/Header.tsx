"use client";
import Image from "next/image";
import logo from "./assets/logo.svg";
import cart from "./assets/cart.svg";
import Link from "next/link";
import AuthButtons from "./AuthButtons";
import ActiveLink from "./ActiveLink";
export default function Header() {
  return (
    <div className="justify-between flex items-center backdrop-blur-3xl bg-white/10 border-b border-b-slate-400 pt-4 pb-4 px-20">
      <Link href="/">
        <Image src={logo} alt="logo" width={30} height={30} />
      </Link>
      <div className="flex gap-10 pr-48">
        {/* <Input
          type="text"
          placeholder="Search here"
          className="bg-gradient-to-r from-slate-500 to-mainbg text-white placeholder:text-white border-slate-600 max-w-96 rounded-md"
        /> */}
        <div className="flex justify-between items-center gap-8">
          {/* <Link href="/">Home</Link>
          <Link href="/restaurants">Restaurants</Link>
          <Link href="#">About </Link> */}
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/restaurants">Restaurants</ActiveLink>
          <ActiveLink href="#">About</ActiveLink>
        </div>
      </div>
      <div className="flex gap-8">
        <Link href="/cart">
          <Image src={cart} alt="cart-icon" width={30} height={30} />
        </Link>
        <AuthButtons />
      </div>
    </div>
  );
}
