import { defineConfig } from '@rsbuild/core'
import { pluginVue as vue } from '@rsbuild/plugin-vue'

// https://rsbuild.dev/config
export default defineConfig({
  plugins: [
    vue(),
  ],
  moduleFederation: {
    options: {
      name: 'shared_components',
      filename: 'remoteEntry.js',
      exposes: {
        './UiButton': './src/UiButton.vue',
        './UiTextInput': './src/UiTextInput.vue',
        './UiModal': './src/UiModal.vue',
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
