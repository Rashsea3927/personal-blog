// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      name: "DM Sans",
      cssVariable: "--font-dmsans",
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700, 800],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  trailingSlash: "always",
});
