"use client";
import OrderHistoryCard from "@/components/OrderHistoryCard";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
interface Food {
  _id: string;
  name: string;
  description?: string;
  image: string;
  isAvailable: boolean;
  price: number;
  category: string; // Assuming category is a string, if it's an object, modify accordingly
  restaurant: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Item {
  _id: string;
  food: Food;
  quantity: number;
  price: number;
}
export interface Order {
  _id: string;
  user: string; // User ID
  items: Item[];
  status: "pending" | "preparing" | "delivered" | "cancelled";
  totalPrice: number;
  createdAt: string; // ISO Date String
  updatedAt: string; // ISO Date String
  __v: number;
}

export default function OrderHistory() {
  const { user } = useUser();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user?.id) return;

    const fetchUserAndOrders = async () => {
      try {
        setLoading(true);

        // Step 1: Fetch the user ID
        const userRes = await fetch("/api/getUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ clerkUserId: user.id }),
        });

        if (!userRes.ok) throw new Error("Failed to fetch user ID");

        const { userId } = await userRes.json();
        console.log("User ID fetched:", userId);

        // Step 2: Fetch orders for the user
        const ordersRes = await fetch(`/api/orders/${userId}`);
        console.log("Orders response:", ordersRes);

        if (!ordersRes.ok) throw new Error("Failed to fetch orders");

        const ordersData = await ordersRes.json();
        console.log("Orders fetched:", ordersData);

        setOrders(ordersData);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserAndOrders();
  }, [user?.id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!orders.length) return <p>No orders found.</p>;

  return (
    <div className="w-full pt-12">
      <h1 className="text-2xl font-bold">Order History</h1>
      <ul className="pt-12">
        <div className="flex flex-col gap-8 w-full">
          {orders.map((order) =>
            order.items.map((item) => (
              <div
                className=" bg-gradient-to-br backdrop-blur-3xl  from-white/30 to-transparent border border-slate-700 gap-4 rounded-xl"
                key={item._id}
              >
                <OrderHistoryCard item={item} order={order} />
              </div>
            ))
          )}
        </div>
      </ul>
    </div>
  );
}
