import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.tsx", // entry widget
      name: "Chatbot", // chỉ dùng khi UMD/IIFE
      formats: ["es"], // build ESM
      fileName: "chatbot1",
    },
    rollupOptions: {
      // ⚠ Không external React nữa
      external: [], // bỏ tất cả external
    },
  },
});
