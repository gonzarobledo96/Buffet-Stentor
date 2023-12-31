// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Ajusta esto según el nombre de tu repositorio
  plugins: [react()],
});
