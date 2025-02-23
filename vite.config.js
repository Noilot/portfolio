import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  base: "/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      external: [],
    },
  },
  optimizeDeps: {
    exclude: ["node_modules"],
  },
});
