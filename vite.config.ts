import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
  server: {
    host: true, // Mengizinkan akses melalui IP lokal
    port: 3000, // Atur port sesuai keinginan (default: 5173)
  },
});
