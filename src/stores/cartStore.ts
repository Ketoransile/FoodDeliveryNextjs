import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createJSONStorage } from "zustand/middleware";
import mongoose from "mongoose";

// IFood interface
export interface IFood {
  _id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  category: mongoose.Schema.Types.ObjectId;
  restaurant: mongoose.Schema.Types.ObjectId;
  isAvailable: boolean;
}

// Updated CartItem interface
interface CartItem extends Omit<IFood, "category" | "restaurant"> {
  quantity: number;
  category: string; // Store as string instead of ObjectId
  restaurant: string; // Store as string instead of ObjectId
}

// Zustand Cart Store with Persist
interface CartState {
  userId: string | null; // Add userId to the store
  cart: CartItem[];
  setUserId: (userId: string) => void; // Method to set userId
  addToCart: (item: IFood) => void;
  decreaseQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      userId: null, // Initialize userId as null
      cart: [],

      // Method to set userId
      setUserId: (userId) => set({ userId }),

      addToCart: (item) => {
        const { cart } = get();
        // const { userId, cart } = get();
        // if (!userId) {
        // console.error("You must be logged in to add items to the cart.");
        // return;
        // }

        const existingItem = cart.find((i) => i._id === item._id);
        if (existingItem) {
          set({
            cart: cart.map((i) =>
              i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({
            cart: [
              ...cart,
              {
                ...item,
                quantity: 1,
                category: item.category.toString(),
                restaurant: item.restaurant.toString(),
              },
            ],
          });
        }
      },
      decreaseQuantity: (id) => {
        const { cart } = get();
        const updatedCart = cart
          .map((item) =>
            item._id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0); // Remove if quantity reaches 0

        set({ cart: updatedCart });
      },
      removeFromCart: (id) =>
        set({ cart: get().cart.filter((item) => item._id !== id) }),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage", // Key for localStorage
      storage: createJSONStorage(() => localStorage), // Store in localStorage
    }
  )
);
