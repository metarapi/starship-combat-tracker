import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  base: "/static/",
  resolve: {
    alias: {
      '@': resolve('./static'),
    }
  },
  build: {
    manifest: "manifest.json",
    outDir: resolve("./assets"),                // Output directory for built files
    assetsDir: "django-assets",                 // Directory for static assets
    rollupOptions: {
      input: {
        test: resolve('./static/js/main.js'),   // Entry point for the application
      }
    }
  },
  plugins: [
    tailwindcss(),
  ],
})