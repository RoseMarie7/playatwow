// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import tinaDirective from "./astro-tina-directive/register";
import swup from "@swup/astro";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), tinaDirective(), swup({ globalInstance: true })],
  server: {
    open: "/",
  },
});
