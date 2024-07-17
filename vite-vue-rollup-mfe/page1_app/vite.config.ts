import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'page1',
      filename: 'remoteEntry.js',
      exposes: {
        './Page1': './src/Page1.vue',
      },
      remotes: {
        shared_components: 'http://localhost:42069/shared_components/remoteEntry.js',
      },
      shared: ['vue'],
    }),
  ],
  server: {
    port: 5002,
  },
  preview: {
    port: 5002,
  },
  build: {
    target: 'esnext',
  },
})
