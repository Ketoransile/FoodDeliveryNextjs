"use client";
import { useCartStore } from "@/stores/cartStore";

export default function CartPage() {
  const { cart } = useCartStore();
  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-2xl font-bold">Cart Page</h1>
      {cart.map((food) => (
        <div className="bg-gray-300" key={food._id}>
          <h1>{food.name}</h1>
        </div>
      ))}
    </div>
  );
}
// Compare this snippet from src/app/cart/summary/page.tsx:
