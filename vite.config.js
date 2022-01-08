import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { viteSingleFile } from "vite-plugin-singlefile";
import { minifyHtml } from "vite-plugin-html";

export default defineConfig({
  plugins: [solidPlugin(), viteSingleFile(), minifyHtml()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
    //settings for singlefile
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    brotliSize: false,
    rollupOptions: {
      inlineDynamicImports: true,
      output: {
        manualChunks: () => "everything.js",
      },
    },
  },
});
