import { db, Order } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db
    .insert(Order)
    .values({
      firstName: "Bob",
      lastName: "Smith",
      subscribeToNewsletter: true,
      shirtSize: "xl",
      shirtColor: "blue",
    })
    .execute();
}
