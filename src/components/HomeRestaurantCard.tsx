import Link from "next/link";
import { FaClock, FaStar } from "react-icons/fa";
// type restaurantType = {
//   _id: string;
//   name: string;
//   description: string;
//   // price: number;
//   image: string;
// };
import { restaurantType } from "../app/restaurants/page";
export default function HomeRestaurantCard({
  restaurant,
}: {
  restaurant: restaurantType;
}) {
  const restaurantId = restaurant._id;
  return (
    <Link
      href={`/restaurants/${restaurantId}`}
      className="flex flex-col gap-2 backdrop-blur-2xl bg-white/10 border border-slate-400 rounded-xl"
    >
      {/* // <div className="flex flex-col gap-2 border border-slate-400 rounded-xl"> */}
      <img
        src={`${restaurant.image}`}
        alt={restaurant.name}
        className="object-cover h-48  rounded-3xl p-2 w-full"
        // width={20}
        // height={20}
        placeholder="empty"
      />
      <div className="flex flex-col gap-2 px-2 pb-2">
        <h1 className="text-base font-semibold text-white">
          {restaurant.name}
        </h1>
        <p className="text-xs text-white">{restaurant.description}</p>
        <div className="flex justify-between items-center ">
          <p className="text-xs text-white font-semibold">
            ${restaurant.price}
          </p>
        </div>
        <div className="flex justify-between pt-2">
          <div className="flex text-xs gap-1 text-white">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="flex gap-2 text-white">
            <FaClock />
            <p className="text-xs ">30 mins</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
