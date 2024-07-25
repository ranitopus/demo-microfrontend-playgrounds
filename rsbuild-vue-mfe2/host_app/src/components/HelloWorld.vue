<script setup lang="ts">
  import { ref } from 'vue'

  // @ts-expect-error
  import UiButton from 'shared_components/UiButton'

  defineProps<{ msg: string }>()

  const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <ui-button type="button" @click="count++">
      Clicked {{ count }} time{{ (count === 1) ? '' : 's' }}
    </ui-button>
    <p>
      Edit <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>
  h1 {
    margin-top: .25em;
  }
</style>
