import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// IMPORTANT for GitHub Pages:
// 1) If you deploy to https://<user>.github.io/<repo>/
//    set base to '/<repo>/'
// 2) If you deploy to https://<user>.github.io/
//    set base to '/'
const BASE = process.env.PUBLIC_BASE_PATH || '/';

export default defineConfig({
  site: "https://vedantbajaj.github.io",
  base: "/vedant-portfolio/",
  integrations: [tailwind()],
});
