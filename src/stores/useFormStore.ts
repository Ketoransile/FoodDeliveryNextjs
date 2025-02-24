import { create } from "zustand";
import { useCartStore } from "./cartStore";
import { useUser } from "@clerk/nextjs";
import { createJSONStorage, persist } from "zustand/middleware";

type FormState = {
  address: {
    name: string;
    phoneNumber: string;
    streetName: string;
    city: string;
    state: string;
    zip: string;
  };
  payment: {
    cardNumber: string;
    cvv: string;
    holderName: string;
    expiryMonth: string;
    expiryYear: string;
  };
  setAddress: (data: Partial<FormState["address"]>) => void;
  setPayment: (data: Partial<FormState["payment"]>) => void;
  submitForm: (user: any) => Promise<void>;
};

export const useFormStore = create<FormState>()(
  persist(
    (set, get) => ({
      address: {
        name: "",
        phoneNumber: "",
        streetName: "",
        city: "",
        state: "",
        zip: "",
      },
      payment: {
        cardNumber: "",
        cvv: "",
        holderName: "",
        expiryMonth: "",
        expiryYear: "",
      },
      setAddress: (data) =>
        set((state) => ({ address: { ...state.address, ...data } })),
      setPayment: (data) =>
        set((state) => ({ payment: { ...state.payment, ...data } })),
      submitForm: async (userId) => {
        const { address, payment } = get();
        const { cart } = useCartStore.getState();

        if (!userId) {
          console.error("User not authenticated");
          return;
        }

        // Transform cart items to match the schema format
        console.log("cart from the seFOrmState", cart);
        if (cart.length === 0) {
          console.error("Cart is empty");
          return;
        }
        const items = cart.map((item) => ({
          food: item._id, // Assuming `item.id` holds the Food ObjectId
          quantity: item.quantity,
          price: item.price,
        }));

        // Calculate total price
        const totalPrice = items.reduce(
          (sum, item) => sum + item.quantity * item.price,
          0
        );

        const formData = {
          user: userId, // MongoDB ObjectId reference
          items,
          totalPrice,
          address,
          payment,
        };

        try {
          const response = await fetch("/api/submit-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Submission failed");
          }

          const result = await response.json();
          console.log("Order submitted successfully:", result);

          // Clear cart after successful order submission
          useCartStore.getState().clearCart();
        } catch (error) {
          console.error("Error submitting order:", error);
        }
      },
    }),
    {
      name: "Checkout Storage", // Key for localStorage
      storage: createJSONStorage(() => localStorage), // Store in localStorage
      onRehydrateStorage: (state) => {
        console.log("Rehydrating state:", state);
      },
    }
  )
);
