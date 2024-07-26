import { defineConfig } from '@rsbuild/core'
import { pluginVue as vue } from '@rsbuild/plugin-vue'

// https://rsbuild.dev/config
export default defineConfig({
  plugins: [
    vue(),
  ],
  moduleFederation: {
    options: {
      name: 'page2',
      filename: 'remoteEntry.js',
      exposes: {
        './Page2': './src/Page2.vue',
      },
      remotes: {
        shared_components: 'http://localhost:42069/shared_components/remoteEntry.js',
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
