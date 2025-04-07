import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [],
  resolve: {
    alias: [
      { find: "@repo", replacement: resolve(__dirname, "../../packages") },
    ],
  },
});
