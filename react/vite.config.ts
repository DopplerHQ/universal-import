import * as path from "path";
import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  server: {
    host: "0.0.0.0",
    port: 1234,
  },
  build: {
    outDir: "dist/",
    sourcemap: false,
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, "lib/index.ts"),
      name: "@dopplerhq/universal-import-react",
      fileName: (format) => "index.js",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "@dopplerhq/universal-import-core"],
    },
  },
  plugins: [
    react(),
    dts({
      include: ["lib/index.ts", "lib/DopplerImportButton.tsx"],
    }),
    visualizer() as Plugin,
  ],
});
