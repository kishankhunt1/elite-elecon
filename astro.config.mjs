import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://elite-elecon-eight.netlify.app",
  integrations: [alpinejs(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
