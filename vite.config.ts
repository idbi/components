import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
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
      plugins: [peerDepsExternal()],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
          "react-select": "Select",
          "react/jsx-runtime": "react/jsx-runtime.js",
          "@radix-ui/react-collapsible": "@radix-ui/react-collapsible",
          "@floating-ui/react-dom": "@floating-ui/react-dom",
          "react-icons": "react-icons",
          "date-fns": "date-fns",
          "react-date-range": "react-date-range",
          "google-map-react": "google-map-react",
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
