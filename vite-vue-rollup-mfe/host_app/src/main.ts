import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  routes: [],
  history: createWebHistory(),
})

import App from './App.vue'

createApp(App)
  .use(router)
  .mount('#app')
