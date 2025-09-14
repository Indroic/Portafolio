// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://indroic.me/portafolio/', // URL de tu sitio en GitHub Pages
  base: '/portafolio/', // Subdirectorio del repo
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});