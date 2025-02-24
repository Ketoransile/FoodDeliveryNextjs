"use client";
// import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MonthSelector } from "@/components/MonthSelector";
import { YearSelector } from "@/components/YearSelector";
import { useFormStore } from "@/stores/useFormStore";
import { useUser } from "@clerk/nextjs";
import { useCartStore } from "@/stores/cartStore";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const creditCardSchema = z.object({
  cardNumber: z.string().regex(/^\d{16}$/, "Card number must be 16 digits"),
  cvv: z.string().regex(/^\d{3,4}$/, "CVV must be 3 or 4 digits"),
  holderName: z.string().min(1, "Holder name is required"),
  expiryMonth: z
    .string()
    .regex(/^(0[1-9]|1[0-2])$/, "Month must be between 01 and 12"),
  expiryYear: z.string().regex(/^\d{2}$/, "Year must be in YY format"),
});
// export default function PaymentPage() {
//   const { user } = useUser();
//   const { payment, setPayment, submitForm } = useFormStore();
//   const form = useForm<z.infer<typeof creditCardSchema>>({
//     resolver: zodResolver(creditCardSchema),
//     defaultValues: payment,
//   });
//   async function onSubmit(values: z.infer<typeof creditCardSchema>) {
//     const orderingUser = await User.findOne({
//       clerkUserId: user.id,
//     });
//     if (!user) {
//       console.error("User not authenticated");
//       return;
//     }
//     setPayment(values);
//     console.log("Cart contents:", useCartStore.getState().cart);
//     await submitForm(user);
//     console.log("FOrm values from payment page is", values);
//   }

//   console.log("Form state:", form.formState);
//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="p-6 backdrop-lg bg-gradient-to-br from-white/10 to-transparent border border-slate-700 rounded-xl"
//       >
//         <div className="flex flex-col gap-4">
//           <FormField
//             control={form.control}
//             name="holderName"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Cardholder Name</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Name" {...field} className="w-1/2" />
//                 </FormControl>
//                 <FormDescription>
//                   {/* This is your name on the card. */}
//                 </FormDescription>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="cardNumber"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Card Number</FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder="card number"
//                     {...field}
//                     className="w-1/2"
//                   />
//                 </FormControl>
//                 {/* <FormDescription>This is your card number</FormDescription> */}
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <div className="flex gap-10">
//             {/* <FormField
//               control={form.control}
//               name="expiryDate"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>End Month</FormLabel>
//                   <FormControl>
//                     <MonthSelector />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             /> */}
//             <FormField
//               control={form.control}
//               name="expiryMonth"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>End Month</FormLabel>
//                   <FormControl>
//                     <MonthSelector
//                       value={field.value}
//                       onChange={field.onChange}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* <FormField
//               control={form.control}
//               name="expiryYear"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>End Year</FormLabel>
//                   <FormControl>
//                     <YearSelector />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             /> */}
//             <FormField
//               control={form.control}
//               name="expiryYear"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>End Year</FormLabel>
//                   <FormControl>
//                     <YearSelector
//                       value={field.value}
//                       onChange={field.onChange}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="cvv"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>CVV</FormLabel>
//                   <FormControl>
//                     <Input placeholder="1234" {...field} />
//                     {/* <Input placeholder="YYYY" {...field} /> */}
//                   </FormControl>
//                   {/* <FormDescription>This is your card number</FormDescription> */}
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           <button type="submit" className="bg-buttonbg p-2 rounded-xl px-12">
//             Pay Now
//           </button>
//         </div>
//       </form>
//     </Form>
//   );
// }
export default function PaymentPage() {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const { payment, setPayment, submitForm } = useFormStore();
  const form = useForm<z.infer<typeof creditCardSchema>>({
    resolver: zodResolver(creditCardSchema),
    defaultValues: payment,
  });
  const router = useRouter();

  async function onSubmit(values: z.infer<typeof creditCardSchema>) {
    setLoading(true);
    if (!user) {
      console.error("User not authenticated");
      return;
    }

    try {
      // Find the user in MongoDB using clerkUserId
      const res = await fetch("/api/getUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ clerkUserId: user.id }),
      });

      const data = await res.json();

      if (res.status !== 200) {
        console.error("Error fetching user:", data.error);
        return;
      }

      const userId = data.userId;

      setPayment(values);
      console.log("Cart contents:", useCartStore.getState().cart);

      // Pass MongoDB ObjectId instead of Clerk ID
      await submitForm(userId);
      router.push("/order-sucessfull");

      console.log("Form values from payment page:", values);
    } catch (error) {
      console.error("Error finding user:", error);
    } finally {
      setLoading(false);
    }
  }

  console.log("Form state:", form.formState);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-6 backdrop-lg bg-gradient-to-br from-white/10 to-transparent border border-slate-700 rounded-xl"
      >
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="holderName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cardholder Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} className="w-1/2" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cardNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Card Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="card number"
                    {...field}
                    className="w-1/2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-10">
            <FormField
              control={form.control}
              name="expiryMonth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End Month</FormLabel>
                  <FormControl>
                    <MonthSelector
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="expiryYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End Year</FormLabel>
                  <FormControl>
                    <YearSelector
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cvv"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CVV</FormLabel>
                  <FormControl>
                    <Input placeholder="1234" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {loading ? (
            <button className="bg-lime-800 p-2 rounded-xl px-12 w-fit">
              Please wait...
            </button>
          ) : (
            <button
              type="submit"
              className="bg-buttonbg p-2 rounded-xl px-12 w-fit "
              disabled={loading}
            >
              Pay Now
            </button>
          )}
        </div>
      </form>
    </Form>
  );
}
