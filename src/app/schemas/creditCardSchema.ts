import { z } from "zod";

export const creditCardSchema = z.object({
  cardNumber: z.string().regex(/^\d{16}$/, "Card number must be 16 digits"),
  cvv: z.string().regex(/^\d{3,4}$/, "CVV must be 3 or 4 digits"),
  holderName: z.string().min(1, "Holder name is required"),
  expiryMonth: z
    .string()
    .regex(/^(0[1-9]|1[0-2])$/, "Month must be between 01 and 12"),
  expiryYear: z.string().regex(/^\d{2}$/, "Year must be in YY format"),
});
