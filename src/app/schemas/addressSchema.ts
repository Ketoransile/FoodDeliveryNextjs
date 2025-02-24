// src/schemas/addressSchema.ts
import { z } from "zod";

export const addressSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phoneNumber: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format." }),
  streetName: z.string().min(3, { message: "Street name is required." }),
  city: z.string().min(2, { message: "City is required." }),
  state: z.string().min(2, { message: "State is required." }),
  zip: z.string().regex(/^\d{4,5}(-\d{4})?$/, {
    message:
      "Invalid Zip Code. Should be 4 or 5 digits, optionally with '-XXXX'.",
  }),
});
