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
  //     name: 'page2',
  //     filename: 'remoteEntry.js',
  //     exposes: {
  //       './Page2': './src/Page2.vue',
  //     },
  //     remotes: {
  //       shared_components: 'shared_components@http://localhost:42069/shared_components/remoteEntry.js',
  //     },
  //     shared: ['vue', 'vue-router'],
  //   },
  // },
  dev: {
    assetPrefix: 'http://localhost:42069/page2_app',
  },
  output: {
    assetPrefix: 'http://localhost:42069/page2_app',
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      config.output!.uniqueName = 'page2'
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'page2',
          exposes: {
            './Page2': './src/Page2.vue',
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
