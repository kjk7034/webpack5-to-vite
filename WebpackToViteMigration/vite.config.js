import { defineConfig, splitVendorChunkPlugin } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9000,
    open: true,
    historyApiFallback: true,
    proxy: {
      // Configure proxy if needed
    },
  },
  plugins: [
    eslintPlugin(),
    viteStaticCopy({
      targets: [
        {
          src: "src/assets/*",
          dest: "assets",
        },
      ],
    }),
    splitVendorChunkPlugin(),
  ],
});
