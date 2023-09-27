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
    rollupOptions: {
      plugins: [peerDepsExternal({ includeDependencies: true })],
      preserveEntrySignatures: "exports-only",
      input: "src/index.js",
      output: {
        dir: "dist",
        format: "esm",
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: ({ name: fileName }) => {
          return `id-${fileName}.js`;
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
