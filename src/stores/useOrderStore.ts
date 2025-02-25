import { create } from "zustand";
import { z } from "zod";
import { addressSchema } from "../app/schemas/addressSchema";
import { creditCardSchema } from "../app/schemas/creditCardSchema";

export type Address = z.infer<typeof addressSchema>;
export type CreditCard = z.infer<typeof creditCardSchema>;

interface OrderState {
  address: Address | null;
  payment: CreditCard | null;
  setAddress: (data: Address) => void;
  setPayment: (data: CreditCard) => void;
  submitOrder: () => Promise<void>;
}

export const useOrderStore = create<OrderState>((set) => ({
  address: null,
  payment: null,
  setAddress: (data: Address) => set({ address: data }),
  setPayment: (data: CreditCard) => set({ payment: data }),

  submitOrder: async () => {
    const { address, payment } = useOrderStore.getState();
    if (address && payment) {
      const order = { ...address, ...payment };

      try {
        const response = await fetch("/api/order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(order),
        });

        if (response.ok) {
          console.log("Order submitted successfully");
        } else {
          console.error("Order submission failed");
        }
      } catch (error) {
        console.error("Error submitting order:", error);
      }
    }
  },
}));
