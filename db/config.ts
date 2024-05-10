import { column, defineDb, defineTable } from "astro:db";

const Order = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    firstName: column.text(),
    lastName: column.text(),
    subscribeToNewsletter: column.boolean(),
    shirtSize: column.text(),
    shirtColor: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Order,
  },
});
