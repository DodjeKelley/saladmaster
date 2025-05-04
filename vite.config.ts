import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import fs from 'fs';

// Determine the base path based on CNAME or GitHub Pages deployment
const getBasePath = () => {
  // Check if CNAME file exists (indicating custom domain)
  const cnamePath = path.resolve(import.meta.dirname, "client/public/CNAME");
  const hasCnameFile = fs.existsSync(cnamePath);
  
  if (hasCnameFile) {
    console.log("CNAME file detected, using root path for assets");
    return '/';
  }
  
  // For GitHub Pages deployment at github.io/saladmaster
  console.log("No CNAME file detected, using /saladmaster/ path for assets");
  return '/saladmaster/';
};

export default defineConfig({
  base: getBasePath(),
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
});
