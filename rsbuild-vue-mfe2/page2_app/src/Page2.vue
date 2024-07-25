<script lang="ts" setup>
  import { ref } from 'vue'
  // @ts-expect-error
  import UiButton from 'shared_components/UiButton'
  // @ts-expect-error
  import UiTextInput from 'shared_components/UiTextInput'

  const inputTextValue = ref('')

  function handleButtonClick() {
    alert('This is an action from Page 2.')
  }
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
