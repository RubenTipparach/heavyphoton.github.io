import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  base: './',
  build: {
    outDir: '../docs',
    emptyOutDir: false,
  },
  server: {
    open: true,
  },
})
