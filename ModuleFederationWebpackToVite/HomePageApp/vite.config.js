import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    react(),
    federation({
      name: "home",
      filename: "remoteEntry.js",
      remotes: {
        components: "http://localhost:3002/dist/assets/remoteEntry.js",
        movieapp: "http://localhost:9000/dist/assets/remoteEntry.js",
      },
      exposes: {
        "./HomePage": "./src/components/HomeContent/HomeContent.jsx",
      },
      shared: ["react","react-dom"]
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
