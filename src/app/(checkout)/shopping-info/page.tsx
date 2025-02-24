"use client";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import Link from "next/link";

export default function ShoppingInfoPage() {
  const { cart } = useCartStore();
  console.log(cart);
  const totalPrice = cart?.reduce(
    (sum, food) => sum + food.price * food.quantity,
    0
  );
  const tax1 = (totalPrice / 20).toFixed(2);
  const tax2 = (totalPrice / 40).toFixed(2);
  const total = totalPrice + parseFloat(tax1) + parseFloat(tax2);
  return (
    <div className="backdrop-blur-lg bg-gradient-to-br from-white/20  to-transparent p-8 rounded-lg border border-slate-700">
      <div className="flex flex-col gap-4  ">
        {cart.map((food) => (
          <div className="grid grid-cols-2 gap-4 " key={food._id}>
            <p className="font-bold text-lg">{food.name}</p>
            <p className="text-slate-300">
              ${(food.price * food.quantity).toFixed(2)}
            </p>
          </div>
        ))}
        <div className="border-b border-slate-300"></div>
        <div className="flex flex-col gap-4 ">
          <div className="grid grid-cols-2 gap-4">
            <h1>{""}</h1>
            <p className="text-slate-300">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <h1 className="text-base font-bold">Tax 1</h1>
            <p className="text-slate-300">${tax1}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <h1 className="text-base font-bold">Tax 2</h1>
            <p className="text-slate-300">${tax2}</p>
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
            <h1 className="text-base font-bold">Discount</h1>
            <p className="text-slate-300">$10</p>
          </div> */}
          <div className="border-b border-slate-300"></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <h1 className="text-2xl font-bold">Total</h1>
          <p className="text-2xl ">${total.toFixed(2)}</p>
        </div>
        <div className="pt-12">
          {/* <Link href="/address" className="bg-buttonbg p-2 rounded-xl px-12  ">
            Next
          </Link> */}
          <Link href="address" className="bg-buttonbg p-2 rounded-xl px-12">
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
