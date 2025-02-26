"use client";
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
import { redirect } from "next/navigation";
import { useFormStore } from "@/stores/useFormStore";
import { addressSchema } from "@/app/schemas/addressSchema";
// export const addressSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
//   phoneNumber: z
//     .string()
//     .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format." }),
//   streetName: z.string().min(3, { message: "Street name is required." }),
//   city: z.string().min(2, { message: "City is required." }),
//   state: z.string().min(2, { message: "State is required." }),
//   zip: z.string().regex(/^\d{4,5}(-\d{4})?$/, {
//     message:
//       "Invalid Zip Code. Should be 4 or 5 digits, optionally with '-XXXX'.",
//   }),
// });
export default function AddressPage() {
  const { address, setAddress } = useFormStore();
  const form = useForm<z.infer<typeof addressSchema>>({
    resolver: zodResolver(addressSchema),
    defaultValues: address,
  });
  function onSubmit(values: z.infer<typeof addressSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setAddress(values);
    redirect("/payment");
    console.log("Form values from address", values);
  }
  return (
    // ...

    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 backdrop-blur-lg bg-gradient-to-br from-white/10 to-transparent p-6 border border-slate-700 rounded-xl"
      >
        <div className="grid grid-cols-2 gap-x-32 gap-y-4 max-md:grid-cols-1">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Number Field */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+1234567890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Street Name Field */}
          <FormField
            control={form.control}
            name="streetName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street Name</FormLabel>
                <FormControl>
                  <Input placeholder="123 Main St" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* City Field */}
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="New York" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* State Field */}
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input placeholder="NY" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Zip Code Field */}
          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip Code</FormLabel>
                <FormControl>
                  <Input placeholder="10001" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="">
          {/* <Link
            href="/payment"
            type="submit"
            className="bg-buttonbg p-2 rounded-xl px-12"
          >
            Next
          </Link> */}
          <button type="submit" className="bg-buttonbg p-2 rounded-xl px-12">
            Next
          </button>
        </div>
      </form>
    </Form>
  );
}
