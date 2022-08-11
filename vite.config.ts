import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

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
      entry: path.resolve(__dirname, "src/index.js"),
      name: "ID-Components",
      fileName: "id-components",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "styled-components",
        "react-loading-skeleton",
        "react-select",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
          "react-loading-skeleton": "Skeleton",
          "react-select": "Select",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
