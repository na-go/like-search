import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    outDir: 'dist/public',
  },
  server: {
    port: 3000,
  },
})
