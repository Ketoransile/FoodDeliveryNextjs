"use client";
import { FaStar } from "react-icons/fa";
import { Button } from "./ui/button";
import { useCartStore } from "@/stores/cartStore";
import { useToast } from "@/hooks/use-toast";
import { IFood } from "@/stores/cartStore";
import Image from "next/image";
export default function RestaurantDetailCard({ food }: { food: IFood }) {
  const { addToCart, cart } = useCartStore();
  const { toast } = useToast();
  const isInCart = cart.some((item) => item._id === food._id);
  const handleAddToCart = () => {
    try {
      toast({
        title: "Food added to cart Successfully!",
      });
      addToCart(food);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Failed to add to cart:", error.message);
      } else {
        console.error("An unknown error occurred while adding to cart:", error);
      }

      toast({
        title: "Failed to add to Cart",
      });
    }
  };
  return (
    <div className="flex gap-4 p-4 items-center text-white">
      <Image
        src={`${food.image}`}
        alt="food image"
        width={200}
        height={200}
        className="h-[200px] w-[200px] rounded-xl object-cover"
      />
      <div className="flex flex-col gap-2">
        <h1>{food.name}</h1>
        <div className="flex gap-2">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <h1 className="text-buttonbg">${food.price}</h1>
        <p className="text-slate-300 text-xs">{food.description}</p>
        <div className="w-fit">
          <Button
            className={`bg-buttonbg min-w-full rounded-xl disabled:bg-black w-fit`}
            onClick={handleAddToCart}
            disabled={isInCart}
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
