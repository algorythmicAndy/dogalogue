import { defineConfig, envField } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import node from '@astrojs/node';
import react from "@astrojs/react";
// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'standalone'
  }),

  env: {
    schema: {
      DOGAPI_ADDRESS: envField.string({access: "public", context: "client", optional:false})
    }
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});