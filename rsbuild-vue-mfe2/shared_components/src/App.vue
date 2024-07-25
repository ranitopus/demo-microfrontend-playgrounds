<script setup lang="ts">
  import { ref } from 'vue'
  import UiButton from './UiButton.vue'
  import UiTextInput from './UiTextInput.vue'

  const textInputDemoValue = ref('')
</script>

<template>
  <h1>MF001 Shared Components Demo</h1>
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
</template>

<style scoped>

</style>
