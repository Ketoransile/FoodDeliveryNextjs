import { FaStar } from "react-icons/fa";
import { Button } from "./ui/button";

export default function RestaurantDetailCard({ food }: { food: any }) {
  return (
    <div className="flex gap-4 p-4 items-center text-white">
      <img
        src={`${food.image}`}
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
        <Button className="bg-buttonbg p-2 font-bold w-fit">Add to cart</Button>
      </div>
    </div>
  );
}
