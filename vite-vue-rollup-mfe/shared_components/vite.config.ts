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
        './Button': 'src/Button.vue',
      },
      shared: ['vue'],
    }),
  ],
})
