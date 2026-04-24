import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Only scan the main index.html for dependencies, and explicitly ignore checking legacy html files in public/
    entries: ['index.html']
  }
});
