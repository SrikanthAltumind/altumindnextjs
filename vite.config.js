import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
    target: 'esnext',  // Ensures modern JavaScript optimization
    minify: 'esbuild', // Uses fast minification
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Splits third-party libraries into a separate file
          }
          if (id.includes('src/styles')) {
            return 'styles'; // Splits styles into a separate chunk
          }
        },
      },
    },
    cssCodeSplit: true, // Enables CSS splitting (this is enabled by default, but it's good to explicitly state)
  },
});
