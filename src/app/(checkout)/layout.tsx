import StepNavigation from "@/components/StepNavigation";
import React from "react";
const steps = [
  { label: "Cart", link: "/cart", isActive: true },
  { label: "Shopping Info", link: "/shopping-info", isActive: false },
  { label: "Address", link: "/address", isActive: false },
  { label: "Payment", link: "/payment", isActive: false },
];
export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-16 pt-4">
      <StepNavigation steps={steps} />
      {children}
    </section>
  );
}
