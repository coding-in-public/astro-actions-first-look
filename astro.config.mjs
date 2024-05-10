import { defineConfig } from "astro/config";

import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind(), db()],
  output: "server",
  adapter: vercel(),
  experimental: {
    actions: true,
  },
});
