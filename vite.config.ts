import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",   // ensure it binds to localhost
    port: 5173,          // default, but set explicitly
    open: true           // auto-open browser when dev server runs
  }
})
