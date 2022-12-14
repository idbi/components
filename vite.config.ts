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
      external: [
        /node_modules/,
        "react",
        "react-dom",
        "styled-components",
        "react-loading-skeleton",
        "react-select",
        "react/jsx-runtime",
        "@radix-ui/react-collapsible",
        "@floating-ui/react-dom",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
          "react-loading-skeleton": "Skeleton",
          "react-select": "Select",
          "react/jsx-runtime": "react/jsx-runtime.js",
          "@radix-ui/react-collapsible": "@radix-ui/react-collapsible",
          "@floating-ui/react-dom": "@floating-ui/react-dom",
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
