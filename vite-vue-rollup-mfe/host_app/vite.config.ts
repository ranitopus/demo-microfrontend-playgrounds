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
        shared_components: 'http://localhost:5001/assets/remoteEntry.js',
      },
      shared: ['vue'],
    }),
  ],
  build: {
    target: 'esnext',
  },
})
