import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9000,
    open: true,
    historyApiFallback: true,
  },
  plugins: [react()],
})
