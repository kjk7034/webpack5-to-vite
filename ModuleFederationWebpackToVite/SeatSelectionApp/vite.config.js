import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3003,
    historyApiFallback: true,
  },
  plugins: [
    react(),
    federation({
      name: "seatselection",
      filename: "remoteEntry.js",
      exposes: {
        "./SeatSelection":
          "./src/components/SeatSelectionContent/SeatSelectionContent.jsx",
      },
      remotes:{
        movieapp: "http://localhost:9000/dist/assets/remoteEntry.js"
      },
      shared: ["react","react-dom"]
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
})
