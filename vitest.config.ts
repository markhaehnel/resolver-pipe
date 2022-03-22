/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "node",
    clearMocks: true,
    include: ["src/**/*.test.ts"],
  },
});
