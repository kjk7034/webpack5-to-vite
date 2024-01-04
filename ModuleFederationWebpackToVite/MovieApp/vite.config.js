import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9000,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    react(),
    federation({
      name: "movieapp",
      filename: "remoteEntry.js",
      remotes: {
        homepage: "http://localhost:3000/dist/assets/remoteEntry.js",
        detailspage: "http://localhost:3001/dist/assets/remoteEntry.js",
        seatselection: "http://localhost:3003/dist/assets/remoteEntry.js",
      },
      exposes: {
        "./MovieData": "./src/movieObservable.js",
      },
      shared: ["react", "react-dom"],
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
})
