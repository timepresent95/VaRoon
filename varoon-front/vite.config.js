import {defineConfig} from 'vite';
import {fileURLToPath, URL} from 'node:url'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.vue'
    ]
  },
  plugins: [
    vue(),
  ],
  build: {},
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/style/index.scss";`,
      },
    },
  },
})
