import { defineConfig, splitVendorChunkPlugin } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9000,
    open: true,
    historyApiFallback: true,
  },
  plugins: [splitVendorChunkPlugin()],
});
