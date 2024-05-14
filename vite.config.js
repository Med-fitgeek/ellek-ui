import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configurer Vite pour utiliser le dossier 'build' comme sortie
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',  // Définir le répertoire de sortie pour les builds de production
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 500  // Limite pour les avertissements sur la taille des chunks
  }
});
