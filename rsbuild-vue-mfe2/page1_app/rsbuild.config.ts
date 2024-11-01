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
  //     name: 'page1',
  //     filename: 'remoteEntry.js',
  //     exposes: {
  //       './Page1': './src/Page1.vue',
  //     },
  //     remotes: {
  //       shared_components: 'shared_components@http://localhost:42069/shared_components/remoteEntry.js',
  //     },
  //     shared: ['vue', 'vue-router'],
  //   },
  // },
  dev: {
    assetPrefix: 'http://localhost:42069/page1_app',
  },
  output: {
    assetPrefix: 'http://localhost:42069/page1_app',
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      config.output!.uniqueName = 'page1'
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'page1',
          exposes: {
            './Page1': './src/Page1.vue',
          },
          remotes: {
            shared_components: 'shared_components@http://localhost:42069/shared_components/mf-manifest.json',
          },
          shared: ['vue', 'vue-router'],
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
