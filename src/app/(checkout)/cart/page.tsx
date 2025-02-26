"use client";
import { useCartStore } from "../../../stores/cartStore";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
export default function CartPage() {
  const { user } = useUser();
  const { cart, setUserId, addToCart, decreaseQuantity } = useCartStore();
  useEffect(() => {
    if (user) {
      setUserId(user.id);
    }
  }, [user, setUserId]);
  if (!user) {
    return <p>Please login to access your cart</p>;
  }

  // const numberOfItems =
  console.log(cart);
  return (
    <div className=" ">
      <h1 className="text-base pb-4 ">
        You have {cart.length} items in your cart
      </h1>
      <div className="flex flex-col gap-4 py-4 px-6 backdrop-blur-lg bg-gradient-to-br from-white/20  to-transparent border border-slate-700 rounded-xl overflow-y-auto max-h-[440px] max-sm:gap-12  ">
        {cart.map((food) => (
          <div
            key={food._id}
            className="flex justify-between items-center max-sm:grid max-sm:grid-cols-2 max-sm:items-center max-sm:justify-start border border-slate-700 rounded-xl "
          >
            <div className="flex gap-8 justify-center items-center col-span-2 max-sm:grid max-sm:grid-cols-1 p-4">
              <Image
                src={food.image || "/burger.svg"}
                alt={food.name}
                width={200}
                height={200}
                className="object-cover rounded-xl w-32 h-32 "
              />
              <h1 className="text-lg font-bold max-w-56 min-w-56 max-lg:w-fit-content">
                {food.name}
              </h1>
            </div>
            <div className="flex items-center justify-center p-4 ">
              <div className="flex ">
                <button
                  className="bg-buttonbg w-6 rounded-l-md"
                  onClick={() => addToCart(food)}
                >
                  +
                </button>
                <p className="bg-white  text-black w-6 text-center">
                  {food.quantity}
                </p>
                <button
                  className="bg-buttonbg w-6 rounded-r-md"
                  onClick={() => decreaseQuantity(food._id)}
                >
                  {" "}
                  -
                </button>
              </div>
            </div>
            <div className="min-w-20">
              <h1 className="text-lg font-bold ">
                ${(food.quantity * food.price).toFixed(2)}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-8">
        {/* <Link
          href="/shopping-info"
          className="bg-buttonbg p-2 rounded-xl px-12 "
        >
          Next
        </Link> */}
        {cart.length === 0 ? (
          ""
        ) : (
          <Link
            href="/shopping-info"
            className="bg-buttonbg p-2 rounded-xl px-12"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
}
