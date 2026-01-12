// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "Chatbot",
      formats: ["es"],
      fileName: "chatbot",
    },
    rollupOptions: {
      // Bỏ external => bundle React vào
      // external: ['react', 'react-dom'],   <-- không dùng
    },
  },
});
