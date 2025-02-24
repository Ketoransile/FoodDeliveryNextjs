import { create } from "zustand";

export const useOrderStore = create((set) => ({
  address: null,
  payment: null,
  setAddress: (data) => set({ address: data }),
  setPayment: (data) => set({ payment: data }),
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
