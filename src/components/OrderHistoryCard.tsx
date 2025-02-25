// import { useCartStore } from "@/stores/cartStore";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
// import { useToast } from "@/hooks/use-toast";
import { Item } from "../app/(usersettings)/order-history/page";
import { Order } from "../app/(usersettings)/order-history/page";
export default function OrderHistoryCard({
  item,
  order,
}: {
  item: Item;
  order: Order;
}) {
  // const { addToCart, cart } = useCartStore();
  // const { toast } = useToast();
  // // const isInCart = cart.some((cartItem) => cartItem._id === item._id);
  // const handleAddToCart = () => {
  //   try {
  //     toast({
  //       title: "Food added to cart Successfully!",
  //     });
  //     addToCart(item);
  //   } catch (error) {
  //     console.error("Failed to add to cart", error);
  //     toast({
  //       title: "Failed to add to Cart",
  //     });
  //   }
  // };
  console.log("item from history card in", item);
  return (
    <div className="flex gap-4 p-4 items-center text-white">
      <Image
        src={`${item?.food?.image}`}
        width={200}
        height={200}
        className="h-[200px] w-[200px] rounded-xl object-cover"
        alt="food image"
      />
      <div className="flex flex-col gap-2 rounded-xl">
        {/* <p className="text-slate-300 text-xs">{item?.food?.description}</p> */}
        {/* <p className="text-xs">#{item._id}</p>{" "} */}
        <p className="text-xs">{new Date(order.createdAt).toLocaleString()} </p>
        <h1>{item?.food?.name}</h1>
        <div className="flex gap-2">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <h1 className="text-lg ">Quantity {item?.quantity}</h1>
        <h1 className="text-buttonbg font-bold text-2xl">
          ${item?.food?.price}
        </h1>
        {/* <div className="">
          <Button
            className={`bg-buttonbg min-w-full rounded-xl disabled:bg-black w-fit`}
            onClick={handleAddToCart}
            disabled={isInCart}
          >
            Reorder
          </Button>
        </div> */}
      </div>
    </div>
  );
}
