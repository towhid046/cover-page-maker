import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow access from the network
    port: 5173,      // Specify a port if needed (optional)
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
