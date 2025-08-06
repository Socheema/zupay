import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Matches root deployment at https://zu-pay.netlify.app/
  plugins: [react()],
});
