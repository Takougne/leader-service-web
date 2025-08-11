import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Set to your subdirectory if needed (e.g., '/leaderservice/')
  server: {
    // For development server
    proxy: {
      // Proxy API requests if needed
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});