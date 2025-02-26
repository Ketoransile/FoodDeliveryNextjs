"use client";
// import { IFood } from "../app/models/food";
import { IFood } from "../stores/cartStore";
import { FaStar } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { Button } from "./ui/button";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

import Image from "next/image";

export default function HomeFoodCard({ food }: { food: IFood }) {
  const { addToCart, cart } = useCartStore();
  const isInCart = cart.some((item) => item._id === food._id);
  const handleAddToCart = () => {
    try {
      toast("Food added to cart Successfully!");
      addToCart(food);
    } catch (error) {
      console.error("Failed to add to cart", error);
      toast("Failed to add to Cart");
    }
  };
  return (
    <div className="flex flex-col gap-2 backdrop-blur-2xl bg-white/10 border border-slate-400 rounded-xl">
      <Image
        src={food.image || "/burger.svg"}
        alt={food.name}
        width={200}
        height={200}
        className="object-cover h-48  rounded-3xl p-2 w-full"
        // width={20}
        // height={20}
        placeholder="empty"
      />
      <div className="flex flex-col px-2 pb-2 gap-2">
        <h1 className="text-base font-semibold text-white">{food.name}</h1>
        <p className="text-xs text-white">
          {food.description.substring(0, 30) || ""}...
        </p>
        <div className="flex justify-between items-center ">
          <p className="text-xs text-white font-semibold">${food.price}</p>
        </div>
        <div className="flex justify-between pt-2">
          <div className="flex text-xs gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="flex gap-2">
            <FaClock />
            <p className="text-xs">30 mins</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <Button
          className={`bg-buttonbg min-w-full rounded-xl disabled:bg-black `}
          onClick={handleAddToCart}
          disabled={isInCart}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}
