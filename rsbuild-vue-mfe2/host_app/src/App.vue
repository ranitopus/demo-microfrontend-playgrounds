<script setup lang="ts">
  import { onBeforeMount } from 'vue'
  import { useRouter, RouterView, RouterLink } from 'vue-router'

  import HelloWorld from './components/HelloWorld.vue'
  import NotFound from './components/NotFound.vue'

  onBeforeMount(() => {
    const router = useRouter()

    // @ts-expect-error
    const Page1 = () => import('page1/Page1')
    // @ts-expect-error
    const Page2 = () => import('page2/Page2')

    router.addRoute({path: '/page1',           component: Page1,   alias: ['/', '/1']})
    router.addRoute({path: '/page2',           component: Page2,   alias: ['/2']})
    router.addRoute({path: '/:pathMatch(.*)*', component: NotFound})
    router.replace(document.location.pathname)
  })
</script>

<template>
  <hello-world msg="MF003 Host App" />
  <div class="app-page-display">
    <header>
      Page Display
      <nav>
        <router-link to="/1">Page 1</router-link>
        <router-link to="/2">Page 2</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<style scoped>
  .app-page-display {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 8px;
    border-top-left-radius: 0;
    border: 1px solid #e8e8e8;
    width: 800px;
    height: 600px;
    text-align: left;
    margin-top: 2em;
  }

  .app-page-display header {
    position: absolute;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    top: -2em;
    left: -1px;
    width: fit-content;
    height: 2em;
    padding: .5em .75em;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: #e8e8e8;
  }

  .app-page-display header nav a {
    margin-left: 1em;
  }
</style>
