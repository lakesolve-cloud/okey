import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    preset: "vercel",
    publicAssets: [
      {
        dir: "dist/client",
        baseURL: "/",
      },
    ],
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
