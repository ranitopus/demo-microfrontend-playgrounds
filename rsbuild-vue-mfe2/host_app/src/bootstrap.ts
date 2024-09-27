import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
// import { useCounterStore } from './store'

import './global.css'

import App from './App.vue'

const router = createRouter({
  routes: [],
  history: createWebHistory(),
})

const pinia = createPinia()
// const counterStore = useCounterStore(pinia)

createApp(App)
  .use(router)
  .use(pinia)
  // .provide('$counterStore', counterStore)
  .mount('#app')
