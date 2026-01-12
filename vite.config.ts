import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "Chatbot", // chỉ dùng khi UMD/IIFE
      formats: ["es"], // build ESM
      fileName: "chatbot", // output: chatbot.js
    },
    rollupOptions: {
      // **Bỏ external**, React sẽ được bundle vào file
      // external: ['react', 'react-dom'],   <-- bỏ đi
    },
  },
});
