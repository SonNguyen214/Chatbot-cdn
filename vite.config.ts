import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.tsx", // entry point của widget
      name: "Chatbot", // chỉ dùng cho UMD/IIFE, nhưng cần vẫn để đây
      formats: ["es"], // build ESM
      fileName: "chatbot", // output: chatbot.js
    },
    rollupOptions: {
      // External các thư viện lớn nếu muốn
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
