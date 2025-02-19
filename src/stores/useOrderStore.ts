import { create } from "zustand";

// Define types for Order
interface OrderItem {
  food: string; // Reference to Food _id
  quantity: number;
}

interface Order {
  _id: string;
  user: string; // Reference to User _id
  items: OrderItem[];
  totalPrice: number;
  status: "pending" | "preparing" | "delivered" | "canceled";
  createdAt: Date;
  updatedAt: Date;
}

interface OrderStoreState {
  orders: Order[];
  loading: boolean;
  error: string | null;
  fetchOrders: () => Promise<void>;
  createOrder: (
    order: Omit<Order, "_id" | "createdAt" | "updatedAt">
  ) => Promise<void>;
}

// Create the store
const useOrderStore = create<OrderStoreState>((set) => ({
  orders: [],
  loading: false,
  error: null,

  // Fetch orders
  fetchOrders: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("/api/orders");
      const data: Order[] = await res.json();
      set({ orders: data, loading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
        loading: false,
      });
    }
  },

  // Create a new order
  createOrder: async (order) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });
      const data: Order = await res.json();
      set((state) => ({ orders: [...state.orders, data], loading: false }));
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
        loading: false,
      });
    }
  },
}));

export default useOrderStore;
