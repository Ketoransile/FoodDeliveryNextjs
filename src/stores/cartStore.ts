import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createJSONStorage } from "zustand/middleware";
import mongoose from "mongoose";

// IFood interface
export interface IFood {
  // _id: string;
  // name: string;
  // description: string;
  // price: number;
  // image?: string;
  // category: mongoose.Schema.Types.ObjectId | string;
  // restaurant: mongoose.Schema.Types.ObjectId | string;
  // isAvailable: boolean;
  _id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: { _id: string; name: string }; // For display purposes
  categoryId: string; // For storage in the cart
  restaurant: mongoose.Schema.Types.ObjectId | string;
  isAvailable: boolean;
}

// Updated CartItem interface
interface CartItem extends Omit<IFood, "category" | "restaurant"> {
  // quantity: number;
  // category: mongoose.Schema.Types.ObjectId | string; // Store as string instead of ObjectId
  // restaurant: mongoose.Schema.Types.ObjectId | string; // Store as string instead of ObjectId
  quantity: number;
  categoryId: string; // Store as string instead of ObjectId
  restaurant: mongoose.Schema.Types.ObjectId | string; // Store as string instead of ObjectId
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
                // category: item.category,
                categoryId: item.categoryId,
                restaurant: item.restaurant,
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
