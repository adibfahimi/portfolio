import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [tailwind()],
  site: "https://adibf.dev/",
  markdown: {
    shikiConfig: {
      theme: "catppuccin-mocha",
      wrap: true,
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
  },
});
