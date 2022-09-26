import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  server: {
    host: "0.0.0.0",
    port: 4000,
  },
  preview: {
    host: "0.0.0.0",
    port: 4000,
  },
  plugins: [react({ jsxRuntime: "classic" }), visualizer() as Plugin],
});
