import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  experimental: {
    viewTransitions: false,
  },
  output: "static",
  adapter: vercel(),
  // server: (command) => ({ port: command === 'dev' ? 3000 : 4000, host: true })
});