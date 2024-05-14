import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  build: {
    outDir: 'build',  // Spécifiez 'build' comme répertoire de sortie
    rollupOptions: {
      output: {
        // Ajoutez des options de chunking pour optimiser la taille des bundles
        manualChunks: {
          vendor: ['react', 'react-dom']  // Regroupe les dépendances communes
        }
      }
    },
    chunkSizeWarningLimit: 500,  // Augmentez la limite pour réduire les avertissements de taille de chunk
  }
});
