// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://indroic.me/portafolio', // Cambia esto a la URL de tu sitio
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
  output: 'static',
});