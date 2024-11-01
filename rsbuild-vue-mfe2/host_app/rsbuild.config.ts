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
  //     name: 'host_app',
  //     remotes: {
  //       shared_components: 'shared_components@http://localhost:42069/shared_components/remoteEntry.js',
  //       page1: 'page1@http://localhost:42069/page1_app/remoteEntry.js',
  //       page2: 'page2@http://localhost:42069/page2_app/remoteEntry.js',
  //     },
  //     shared: ['vue', 'vue-router'],
  //   },
  // },
  tools: {
    rspack: (_config, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'host_app',
          remotes: {
            shared_components: 'shared_components@http://localhost:42069/shared_components/mf-manifest.json',
            page1: 'page1@http://localhost:42069/page1_app/mf-manifest.json',
            page2: 'page2@http://localhost:42069/page2_app/mf-manifest.json',
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
