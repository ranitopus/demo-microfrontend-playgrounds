import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'shared_components',
      filename: 'remoteEntry.js',
      exposes: {
        './UiButton': './src/UiButton.vue',
      },
      shared: ['vue'],
    }),
  ],
  server: {
    port: 5001,
  },
  preview: {
    port: 5001,
  },
  build: {
    target: 'esnext',
  },
})
