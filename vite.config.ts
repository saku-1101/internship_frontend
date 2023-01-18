import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      src: '/src',
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [vue()]
})
