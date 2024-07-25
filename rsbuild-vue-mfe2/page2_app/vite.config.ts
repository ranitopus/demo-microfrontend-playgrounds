import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'page2',
      filename: 'remoteEntry.js',
      exposes: {
        './Page2': './src/Page2.vue',
      },
      remotes: {
        shared_components: 'http://localhost:42069/shared_components/remoteEntry.js',
      },
      shared: ['vue'],
    }),
  ],
  server: {
    port: 5003,
  },
  preview: {
    port: 5003,
  },
  build: {
    target: 'es2022',
  },
})
