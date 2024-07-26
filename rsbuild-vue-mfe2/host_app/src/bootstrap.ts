import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import './global.css'

import App from './App.vue'

const router = createRouter({
  routes: [],
  history: createWebHistory(),
})

createApp(App)
  .use(router)
  .mount('#app')
