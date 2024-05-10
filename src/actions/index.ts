import { defineAction, z } from "astro:actions";
import { Order, db } from "astro:db";

export const server = {
  order: defineAction({
    accept: "form",
    input: z.object({
      firstName: z
        .string()
        .max(20, {
          message: "Your first name must be no more than 20 characters",
        })
        .min(1, {
          message: "Must be more than 0 characters",
        }),
      lastName: z
        .string()
        .max(30, {
          message: "Your first name must be no more than 30 characters",
        })
        .min(1, {
          message: "Must be more than 0 characters",
        }),
      subscribeToNewsletter: z.boolean(),
      shirtSize: z.enum(["sm", "md", "lg", "xl", "xxl"]),
      shirtColor: z.enum(["blue", "red", "green"]),
    }),
    handler: async (newOrder) => {
      await db.insert(Order).values(newOrder);
      return "Thank you!";
    },
  }),
};
