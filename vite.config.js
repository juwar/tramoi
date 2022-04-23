import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { ViteAliases } from 'vite-aliases'
import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs'

export default defineConfig({
  plugins: [
    // …
    react({
      // Use React plugin in all *.jsx and *.tsx files
      include: '**/*.{js,jsx,tsx}',
    }),
    viteCommonjs(),
    // ViteAliases(),
  ],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        // Solves:
        // https://github.com/vitejs/vite/issues/5308
        // add the name of your package
        esbuildCommonjs(['vite-aliases']),
      ],
    },
  },
});