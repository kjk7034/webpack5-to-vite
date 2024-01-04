import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3002,
    historyApiFallback: true,
  },
  plugins: [
    react(),
    federation({
      name: "components",
      filename: "remoteEntry.js",
      exposes: {
        "./MovieCard": "./src/components/MovieCard/MovieCard.jsx",
        "./BuyButton": "./src/components/Button/BuyButton/BuyButton.jsx",
        "./Typography": "./src/components/Typography/Typography.jsx"
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
