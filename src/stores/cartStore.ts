// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image?: string;
//   restaurantId: string;
// }

// interface CartState {
//   cart: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (id: string) => void;
//   clearCart: () => void;
// }

// export const useCartStore = create<CartState>()(
//   persist(
//     (set, get) => ({
//       cart: [],
//       addToCart: (item) => {
//         const existingCart = get().cart;
//         const existingItem = existingCart.find((i) => i.id === item.id);

//         if (existingItem) {
//           // Update quantity if item exists
//           set({
//             cart: existingCart.map((i) =>
//               i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//             ),
//           });
//         } else {
//           // Add new item
//           set({ cart: [...existingCart, { ...item, quantity: 1 }] });
//         }
//       },
//       removeFromCart: (id) => {
//         set({ cart: get().cart.filter((item) => item.id !== id) });
//       },
//       clearCart: () => set({ cart: [] }),
//     }),
//     { name: "cart-storage" } // Key for localStorage
//   )
// );
// import { create } from "zustand";

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
// }
// interface CartState {
//   cart: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (id: string) => void;
//   clearCart: () => void;
// }

// export const useCartStore = create<CartState>((set) => ({
//   cart: [],
//   addToCart: (item) =>
//     set((state) => {
//       const existingItem = state.cart.find((i) => i.id === item.id);
//       if (existingItem) {
//         return {
//           cart: state.cart.map((i) =>
//             i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//           ),
//         };
//       }
//       return { cart: [...state.cart, { ...item, quantity: 1 }] };
//     }),

//   removeFromCart: (id) =>
//     set((state) => ({
//       cart: state.cart.filter((item) => item.id !== id),
//     })),

//   clearCart: () => set({ cart: [] }),
// }));
import { create } from "zustand";
import mongoose from "mongoose";

// IFood interface (for reference)
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

// Zustand Cart Store
interface CartState {
  cart: CartItem[];
  addToCart: (item: IFood) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((i) => i._id === item._id);
      if (existingItem) {
        return {
          cart: state.cart.map((i) =>
            i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return {
        cart: [
          ...state.cart,
          {
            ...item,
            quantity: 1,
            category: item.category.toString(),
            restaurant: item.restaurant.toString(),
          },
        ],
      };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item._id !== id),
    })),

  clearCart: () => set({ cart: [] }),
}));
