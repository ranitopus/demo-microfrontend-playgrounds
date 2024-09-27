import { ref } from 'vue'
import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', {
//   state: () => ({count: 0}),
//   actions: {
//     countInc() {
//       this.count++
//     },
//   },
// })
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  function countInc() {
    count.value++
  }

  return { count, countInc }
})

export type TCounterStore = ReturnType<typeof useCounterStore>
