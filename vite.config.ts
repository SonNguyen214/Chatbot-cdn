import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {}, // thêm dòng này để React + bundle không crash
  },
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "Chatbot",
      formats: ["es"],
      fileName: "chatbot2",
    },
    rollupOptions: {
      external: [], // bundle React + ReactDOM
    },
  },
});
