import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const ENTRY_MODULE = "src/index.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  build: {
    outDir: "dist",
    lib: {
      entry: path.resolve(__dirname, ENTRY_MODULE),
      name: "ID-Components",
      fileName: "id-components",
    },
    rollupOptions: {
      external: [/node_modules/],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
