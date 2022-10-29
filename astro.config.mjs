import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: 'https://swinlead.com',
  integrations: [sitemap(), tailwind(), robotsTxt(), alpinejs()]
});