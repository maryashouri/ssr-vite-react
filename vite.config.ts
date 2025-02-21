import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "MY PWA HOTEL APP",
        short_name: "HOTEL",
        description: "You can compare hotels easily",
        theme_color: "gray",
        background_color: "#ffffff",
        start_url: "/?v=2",
        display: "standalone",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            // ✅ Cache HTML pages for offline access
            urlPattern: ({ request }) => request.mode === "navigate",
            handler: "NetworkFirst",
            options: {
              cacheName: "pages-cache-v1",
              expiration: { maxAgeSeconds: 60 * 60 * 24 }, // Cache for 1 day
            },
          },
          {
            urlPattern: ({ request }) =>
              request.destination === "script" ||
              request.destination === "style",
            handler: "StaleWhileRevalidate", // Serve cached assets first, update in background
            options: {
              cacheName: "assets-cache-v1",
              expiration: { maxAgeSeconds: 60 * 60 * 24 * 30 }, // Cache for 30 days
            },
          },
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "CacheFirst", // Cache images aggressively
            options: {
              cacheName: "image-cache-v1",
              expiration: { maxAgeSeconds: 60 * 60 * 24 * 7, maxEntries: 50 }, // 1 week
            },
          },
        ],
      },
      devOptions: { enabled: true }, // Enables PWA in development for testing
    }),
  ],
  build: {
    target: "esnext",
    minify: "esbuild",
  },
});
