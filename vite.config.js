import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "demo",
  resolve: {
    alias: {
      "gosling-theme": resolve(__dirname, "./src/index.ts"),
    },
  },
  build: {
    target: "esnext",
    // minify: false,
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      format: ["esm", "umd"],
      name: "goslingTheme",
    },
    sourcemap: true,
  },
});
