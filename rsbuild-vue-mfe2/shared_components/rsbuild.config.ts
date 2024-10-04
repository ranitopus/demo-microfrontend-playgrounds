import { defineConfig } from '@rsbuild/core'
import { pluginVue as vue } from '@rsbuild/plugin-vue'
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack'

// https://rsbuild.dev/config
export default defineConfig({
  plugins: [
    vue(),
  ],
  // moduleFederation: {
  //   options: {
  //     name: 'shared_components',
  //     filename: 'remoteEntry.js',
  //     exposes: {
  //       './UiButton': './src/UiButton.vue',
  //       './UiTextInput': './src/UiTextInput.vue',
  //       './UiModal': './src/UiModal.vue',
  //     },
  //     shared: ['vue'],
  //   },
  // },
  dev: {
    assetPrefix: 'http://localhost:42069/shared_components',
  },
  output: {
    assetPrefix: 'http://localhost:42069/shared_components',
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      config.output!.uniqueName = 'shared_components'
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'shared_components',
          exposes: {
            './UiButton': './src/UiButton.vue',
            './UiTextInput': './src/UiTextInput.vue',
            './UiModal': './src/UiModal.vue',
          },
          shared: ['vue'],
          // dts: {generateTypes: true},
        }),
      ])
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
