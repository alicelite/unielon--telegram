import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl';
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), basicSsl()],
  optimizeDeps: {
    include: ['bitcoinjs-lib'],
  },
  resolve: {
    alias: {
      'buffer': 'buffer',
    }
  },
    build: {
      outDir: './docs'
    },
  base: './'
});