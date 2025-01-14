import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Mengizinkan akses melalui IP lokal
    port: 3000, // Atur port sesuai keinginan (default: 5173)
  },
})
