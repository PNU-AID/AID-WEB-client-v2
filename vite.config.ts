/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import path from 'path';
const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  base: '/homepage/',
  plugins: [react(), svgr()],
  test: {
    globals: true,
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@type': path.resolve(__dirname, 'src/types'),
      '@component': path.resolve(__dirname, 'src/components'),
      '@hook': path.resolve(__dirname, 'src/hooks'),
      '@util': path.resolve(__dirname, 'src/utils'),
      '@style': path.resolve(__dirname, 'src/styles'),
      '@asset': path.resolve(__dirname, 'src/assets'),
      '@page': path.resolve(__dirname, 'src/pages'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@api': path.resolve(__dirname, 'src/apis'),
      '@store': path.resolve(__dirname, 'src/stores'),
    },
  },
});
