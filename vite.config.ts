import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  mode: "development",
  build: {
    target: "es2021",
    polyfillModulePreload: false,
    assetsInlineLimit: 0,
    cssCodeSplit: false,
    sourcemap: "inline",
    reportCompressedSize: false,
    minify: false
  },
  plugins: [react()]
})
