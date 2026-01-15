import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {},
  },
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "Chatbot",
      formats: ["es"],
      fileName: "chatbot-0.0.9",
    },
    minify: "esbuild", // MINIFY
    sourcemap: false,
    rollupOptions: {
      external: [],
    },
  },
});
