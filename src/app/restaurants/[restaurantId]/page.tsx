// import Link from "next/link";
// import Restaurant from "../../models/restaurant";
// import { Button } from "@/components/ui/button";
// import { FaStar } from "react-icons/fa";
// import RestaurantDetailsTabs from "@/components/RestaurantDetailsTabs";
// import restaurantType from "../page";

// export default async function RestaurantDetailPage({
//   params,
// }: {
//   params: { restaurantId: string };
// }) {
//   const { restaurantId } = await params;
//   console.log("restaurantId from", restaurantId);

//   let restaurant = await Restaurant.findById(restaurantId)
//     .populate({
//       path: "foods",
//       populate: {
//         path: "category",
//       },
//     })
//     .lean();

//   console.log("restaurant from", restaurant);

//   // Handle missing or empty foods array
//   if (!restaurant || !restaurant.foods || restaurant.foods.length === 0) {
//     return (
//       <p className="text-white text-center mt-10">
//         No food items found for this restaurant.
//       </p>
//     );
//   }
//   const serializableRestaurant: restaurantType = {
//     ...restaurant,
//     _id: restaurant._id.toString(), // Convert ObjectId to string
//     foods: restaurant.foods.map((food: any) => ({
//       ...food,
//       _id: food._id.toString(), // Convert food _id to string
//     })),
//   };
//   restaurant = serializableRestaurant;

//   return (
//     <div className="flex flex-col gap-8 pt-12">
//       <div className="flex flex-col gap-4">
//         <div className="grid grid-cols-4 gap-4">
//           {restaurant.foods.map((food: any, index: number) => (
//             <img
//               key={food._id}
//               src={food.image}
//               alt={food.name}
//               className={`object-cover rounded-xl ${
//                 index === 0
//                   ? "row-span-2 col-span-2 w-full max-h-[400px] min-h-[400px]"
//                   : "w-[250px] h-[200px]"
//               }`}
//             />
//           ))}
//         </div>
//         <div className="flex justify-between">
//           <div className="flex flex-col gap-4">
//             <h1>{restaurant.name}s</h1>
//             <p className="text-slate-400">Burger, FastFood, Beverages</p>
//             <p className="text-slate-400"> Austin, Texas</p>
//             <div className="flex gap-4">
//               <h1 className="text-red-700 font-bold text-xl">Open Now</h1>
//               <h1 className="text-slate-400">10:00am-11:00pm</h1>
//             </div>
//             <div className="flex gap-4">
//               <Link href="/" className="bg-buttonbg p-4 rounded-2xl">
//                 Add Review
//               </Link>
//               <Link href="/" className="text-slate-200 p-4">
//                 Share{" "}
//               </Link>
//             </div>
//           </div>
//           <div className="flex gap-4">
//             <Button className="bg-buttonbg p-4 rounded-lg">
//               3.6 <FaStar />
//             </Button>
//             <h1 className="text-slate-200 text-xs">
//               96
//               <p>Reviews</p>
//             </h1>
//           </div>
//         </div>
//       </div>
//       <div className="">
//         <RestaurantDetailsTabs restaurant={restaurant} />
//       </div>
//     </div>
//   );
// }
// import Link from "next/link";
// import Restaurant from "../../models/restaurant";
// import { Button } from "@/components/ui/button";
// import { FaStar } from "react-icons/fa";
// import RestaurantDetailsTabs from "@/components/RestaurantDetailsTabs";
// import restaurantType from "../page";

// export default async function RestaurantDetailPage({
//   params,
// }: {
//   params: { restaurantId: string };
// }) {
//   const { restaurantId } = params;
//   console.log("restaurantId from", restaurantId);

//   let restaurant = await Restaurant.findById(restaurantId)
//     .populate({
//       path: "foods",
//       populate: {
//         path: "category",
//       },
//     })
//     .lean();

//   console.log("restaurant from", restaurant);

//   // Handle missing or empty foods array
//   if (!restaurant || !restaurant.foods || restaurant.foods.length === 0) {
//     return (
//       <p className="text-white text-center mt-10">
//         No food items found for this restaurant.
//       </p>
//     );
//   }

//   // Convert ObjectId to string and ensure all nested objects are serializable
//   const serializableRestaurant: restaurantType = {
//     ...restaurant,
//     _id: restaurant._id.toString(), // Convert ObjectId to string
//     foods: restaurant.foods.map((food: any) => ({
//       ...food,
//       _id: food._id.toString(), // Convert food _id to string
//       category: food.category
//         ? {
//             ...food.category,
//             _id: food.category._id.toString(), // Convert category _id to string
//           }
//         : null,
//     })),
//   };

//   return (
//     <div className="flex flex-col gap-8 pt-12">
//       <div className="flex flex-col gap-4">
//         <div className="grid grid-cols-4 gap-4">
//           {serializableRestaurant.foods.map((food: any, index: number) => (
//             <img
//               key={food._id}
//               src={food.image}
//               alt={food.name}
//               className={`object-cover rounded-xl ${
//                 index === 0
//                   ? "row-span-2 col-span-2 w-full max-h-[400px] min-h-[400px]"
//                   : "w-[250px] h-[200px]"
//               }`}
//             />
//           ))}
//         </div>
//         <div className="flex justify-between">
//           <div className="flex flex-col gap-4">
//             <h1>{serializableRestaurant.name}</h1>
//             <p className="text-slate-400">Burger, FastFood, Beverages</p>
//             <p className="text-slate-400"> Austin, Texas</p>
//             <div className="flex gap-4">
//               <h1 className="text-red-700 font-bold text-xl">Open Now</h1>
//               <h1 className="text-slate-400">10:00am-11:00pm</h1>
//             </div>
//             <div className="flex gap-4">
//               <Link href="/" className="bg-buttonbg p-4 rounded-2xl">
//                 Add Review
//               </Link>
//               <Link href="/" className="text-slate-200 p-4">
//                 Share{" "}
//               </Link>
//             </div>
//           </div>
//           <div className="flex gap-4">
//             <Button className="bg-buttonbg p-4 rounded-lg">
//               3.6 <FaStar />
//             </Button>
//             <h1 className="text-slate-200 text-xs">
//               96
//               <p>Reviews</p>
//             </h1>
//           </div>
//         </div>
//       </div>
//       <div className="">
//         <RestaurantDetailsTabs restaurant={serializableRestaurant} />
//       </div>
//     </div>
//   );
// }
// import Link from "next/link";
// import Restaurant from "../../models/restaurant";
// import { Button } from "@/components/ui/button";
// import { FaStar } from "react-icons/fa";
// import RestaurantDetailsTabs from "@/components/RestaurantDetailsTabs";
// import restaurantType from "../page";

// export default async function RestaurantDetailPage({
//   params,
// }: {
//   params: { restaurantId: string };
// }) {
//   const { restaurantId } = params;
//   console.log("restaurantId from", restaurantId);

//   let restaurant = await Restaurant.findById(restaurantId)
//     .populate({
//       path: "foods",
//       populate: {
//         path: "category",
//       },
//     })
//     .lean();

//   console.log("restaurant from", restaurant);

//   // Handle missing or empty foods array
//   if (!restaurant || !restaurant.foods || restaurant.foods.length === 0) {
//     return (
//       <p className="text-white text-center mt-10">
//         No food items found for this restaurant.
//       </p>
//     );
//   }

//   // Serialize the restaurant object and its nested fields
//   const serializableRestaurant: restaurantType = {
//     ...restaurant,
//     _id: restaurant._id.toString(), // Convert ObjectId to string
//     foods: restaurant.foods.map((food: any) => ({
//       ...food,
//       _id: food._id.toString(), // Convert food _id to string
//       category: food.category
//         ? {
//             ...food.category,
//             _id: food.category._id.toString(), // Convert category _id to string
//           }
//         : null,
//       restaurant: food.restaurant
//         ? {
//             ...food.restaurant,
//             _id: food.restaurant._id.toString(), // Convert nested restaurant _id to string
//           }
//         : null,
//     })),
//   };

//   return (
//     <div className="flex flex-col gap-8 pt-12">
//       <div className="flex flex-col gap-4">
//         <div className="grid grid-cols-4 gap-4">
//           {serializableRestaurant.foods.map((food: any, index: number) => (
//             <img
//               key={food._id}
//               src={food.image}
//               alt={food.name}
//               className={`object-cover rounded-xl ${
//                 index === 0
//                   ? "row-span-2 col-span-2 w-full max-h-[400px] min-h-[400px]"
//                   : "w-[250px] h-[200px]"
//               }`}
//             />
//           ))}
//         </div>
//         <div className="flex justify-between">
//           <div className="flex flex-col gap-4">
//             <h1>{serializableRestaurant.name}</h1>
//             <p className="text-slate-400">Burger, FastFood, Beverages</p>
//             <p className="text-slate-400"> Austin, Texas</p>
//             <div className="flex gap-4">
//               <h1 className="text-red-700 font-bold text-xl">Open Now</h1>
//               <h1 className="text-slate-400">10:00am-11:00pm</h1>
//             </div>
//             <div className="flex gap-4">
//               <Link href="/" className="bg-buttonbg p-4 rounded-2xl">
//                 Add Review
//               </Link>
//               <Link href="/" className="text-slate-200 p-4">
//                 Share{" "}
//               </Link>
//             </div>
//           </div>
//           <div className="flex gap-4">
//             <Button className="bg-buttonbg p-4 rounded-lg">
//               3.6 <FaStar />
//             </Button>
//             <h1 className="text-slate-200 text-xs">
//               96
//               <p>Reviews</p>
//             </h1>
//           </div>
//         </div>
//       </div>
//       <div className="">
//         <RestaurantDetailsTabs restaurant={serializableRestaurant} />
//       </div>
//     </div>
//   );
// }
import Link from "next/link";
import Restaurant from "../../models/restaurant";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";
import RestaurantDetailsTabs from "@/components/RestaurantDetailsTabs";
import restaurantType from "../page";
import Image from "next/image";

export default async function RestaurantDetailPage({
  params,
}: {
  params: { restaurantId: string };
}) {
  const { restaurantId } = await params;
  console.log("restaurantId from", restaurantId);

  let restaurant = await Restaurant.findById(restaurantId)
    .populate({
      path: "foods",
      populate: {
        path: "category",
      },
    })
    .lean();

  console.log("restaurant from", restaurant);

  // Handle missing or empty foods array
  if (!restaurant || !restaurant.foods || restaurant.foods.length === 0) {
    return (
      <p className="text-white text-center mt-10">
        No food items found for this restaurant.
      </p>
    );
  }

  // Serialize the restaurant object and its nested fields
  const serializableRestaurant: restaurantType = {
    ...restaurant,
    _id: restaurant._id.toString(), // Convert ObjectId to string
    foods: restaurant.foods.map((food: any) => ({
      ...food,
      _id: food._id.toString(), // Convert food _id to string
      category: food.category
        ? {
            ...food.category,
            _id: food.category._id.toString(), // Convert category _id to string
          }
        : null,
      restaurant: food.restaurant
        ? {
            ...food.restaurant,
            _id: food.restaurant._id.toString(), // Convert nested restaurant _id to string
          }
        : null,
    })),
  };

  console.log("Serialized Restaurant:", serializableRestaurant);

  return (
    <div className="flex flex-col gap-8 pt-12">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-4 gap-4">
          {serializableRestaurant.foods.map((food: any, index: number) => (
            <img
              key={food._id}
              src={food.image}
              alt={food.name}
              className={`object-cover rounded-xl ${
                index === 0
                  ? "row-span-2 col-span-2 w-full max-h-[400px] min-h-[400px]"
                  : "w-[250px] h-[200px]"
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <h1>{serializableRestaurant.name}</h1>
            <p className="text-slate-400">Burger, FastFood, Beverages</p>
            <p className="text-slate-400"> Austin, Texas</p>
            <div className="flex gap-4">
              <h1 className="text-red-700 font-bold text-xl">Open Now</h1>
              <h1 className="text-slate-400">10:00am-11:00pm</h1>
            </div>
            <div className="flex gap-4">
              <Link href="/" className="bg-buttonbg p-4 rounded-2xl">
                Add Review
              </Link>
              <Link href="/" className="text-slate-200 p-4">
                Share{" "}
              </Link>
            </div>
          </div>
          <div className="flex gap-4">
            <Button className="bg-buttonbg p-4 rounded-lg">
              3.6 <FaStar />
            </Button>
            <h1 className="text-slate-200 text-xs">
              96
              <p>Reviews</p>
            </h1>
          </div>
        </div>
      </div>
      <div className="">
        <RestaurantDetailsTabs restaurant={serializableRestaurant} />
      </div>
    </div>
  );
}
