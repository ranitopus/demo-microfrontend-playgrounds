<script lang="ts" setup>
  import { ref, onBeforeMount, onBeforeUnmount } from 'vue'
  import { useRouter } from 'vue-router'

  // @ts-expect-error
  import UiButton from 'shared_components/UiButton'
  // @ts-expect-error
  import UiTextInput from 'shared_components/UiTextInput'

  const inputTextValue = ref('')
  const router = useRouter()

  function handleButtonClick() {
    alert('This is an action from Page 2.')
  }

  let beforeEachOff: () => void

  onBeforeMount(() => {
    beforeEachOff = router.beforeEach((_from, _to, next) => {
      console.log('>> router beforeEach hook callback from page2_app...')
      next()
    })
  })

  onBeforeUnmount(() => {
    beforeEachOff?.()
  })
</script>

<template>
  <div class="page-wrapper">
    <h2>MF003 Page 2 Content</h2>
    <p>
      <ui-button @click="handleButtonClick">
        Show alert pop-up
      </ui-button>
    </p>
    <p>
      <ui-text-input
        id="page2-text-input"
        label="Name"
        placeholder="Type your name here"
        v-model="inputTextValue"
      />
      <template v-if="inputTextValue">
        <br>Hello, {{ inputTextValue }}!
      </template>
    </p>
  </div>
</template>

<style scoped>
  .page-wrapper {
    padding: .375em;
  }
</style>
