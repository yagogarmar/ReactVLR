import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://vlrggapi.vercel.app', // Tu URL base de la API
        changeOrigin: true, // Cambia el origen para evitar problemas de CORS
        rewrite: (path) => path.replace(/^\/api/, ''), // Elimina el prefijo `/api`
      },
    },
  },
});