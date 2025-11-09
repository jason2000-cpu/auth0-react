import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['c4e7c7fe099c.ngrok-free.app', '.ngrok-free.app', '.ngrok.io']
  }
})
