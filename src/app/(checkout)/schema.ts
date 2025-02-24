import { z } from "zod";
import { addressSchema } from "./address/page";
import { creditCardSchema } from "./payment/page";

export const newOrderSchema = z.object({
  ...addressSchema.shape,
  ...creditCardSchema.shape,
});

export type NewOrder = z.infer<typeof newOrderSchema>;
