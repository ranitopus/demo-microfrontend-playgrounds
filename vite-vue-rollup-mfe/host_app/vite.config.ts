import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host_app',
      remotes: {
        shared_components: 'http://localhost:42069/shared_components/remoteEntry.js',
        page1: 'http://localhost:42069/page1_app/remoteEntry.js',
        page2: 'http://localhost:42069/page2_app/remoteEntry.js',
      },
      shared: ['vue'],
    }),
  ],
  build: {
    target: 'es2022',
  },
})
