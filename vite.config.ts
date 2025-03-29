import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: "/crossgosoftware.github.io/",  // GitHub Pages base URL
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...(process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
      ? [await import("@replit/vite-plugin-cartographer").then((m) => m.cartographer())]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),  // Resolves to /client/src
      "@shared": path.resolve(__dirname, "shared"),   // Shared folder
      "@assets": path.resolve(__dirname, "attached_assets"), // Custom assets
    },
  },
  root: path.resolve(__dirname, "client"),  // Sets /client as the root
  build: {
    outDir: path.resolve(__dirname, "dist"), // Moves /client/dist to root /dist
    assetsDir: "assets",                      // Keeps assets in /dist/assets
    emptyOutDir: true,                        // Cleans /dist before build
    rollupOptions: {
      input: "/index.html", // Ensures correct HTML
    },
  },
});
