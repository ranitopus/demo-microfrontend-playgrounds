import { defineConfig } from '@rsbuild/core'
import { pluginVue as vue } from '@rsbuild/plugin-vue'

// https://rsbuild.dev/config
export default defineConfig({
  plugins: [
    vue(),
  ],
  moduleFederation: {
    options: {
      name: 'host_app',
      remotes: {
        shared_components: 'shared_components@http://localhost:42069/shared_components/remoteEntry.js',
        page1: 'page1@http://localhost:42069/page1_app/remoteEntry.js',
        page2: 'page2@http://localhost:42069/page2_app/remoteEntry.js',
      },
      shared: ['vue'],
    },
  },
  html: {
    template: './index.html',
  },
  source: {
    entry: {
      index: './src/main.ts',
    },
  },
})
