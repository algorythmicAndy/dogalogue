// vite.config.ts / vitest.config.ts
import React from "react";
import { defineConfig } from "vitest/config";
export default defineConfig({
  test: {
    setupFiles: ["./vitest.setup.ts"],
  },
  plugins: [React],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
