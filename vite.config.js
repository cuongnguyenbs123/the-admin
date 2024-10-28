import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path, { __dirname } from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/unit/setup.ts",
    dir: "test/unit",
    coverage: {
      include: ["src"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "~/public": path.resolve(__dirname, "public"),
    },
  },
});
