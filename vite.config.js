// vite.config.ts / vitest.config.ts
import { defineConfig } from "vitest/config";
export default defineConfig({
  test: {
    setupFiles: ["./vitest.setup.ts"],
  },
  plugins: [React()],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
