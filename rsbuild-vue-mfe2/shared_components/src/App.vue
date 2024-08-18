<script setup lang="ts">
  import { ref } from 'vue'

  import UiButton from './UiButton.vue'
  import UiTextInput from './UiTextInput.vue'
  import UiModal from './UiModal.vue'

  const textInputDemoValue = ref('')
  const modalShow = ref(false)
</script>

<template>
  <h1>MF003 Shared Components Demo</h1>
  <p>
    Default button:<br>
    <ui-button />
  </p>
  <p>
    Default text input:<br>
    <ui-text-input
      id="text-input-demo"
      label="Text Input Demo"
      v-model="textInputDemoValue"
    />
    <template v-if="textInputDemoValue">
      <br>Typed value is "<i>{{ textInputDemoValue }}</i>"
    </template>
  </p>
  <p>
    Default modal dialog:<br>
    <ui-button @click="modalShow = true">
      Click to open Modal
    </ui-button>
    <ui-modal v-model="modalShow" />
  </p>
</template>

<style scoped>

</style>
