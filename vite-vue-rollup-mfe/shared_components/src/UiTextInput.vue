<script lang="ts" setup>
  import { useAttrs } from 'vue'

  defineOptions({
    inheritAttrs: false
  })

  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
  })
  const value = defineModel()
  const attrs = useAttrs()

  const defaultPlaceholder = "Type here..."
</script>

<template>
  <label :for="attrs.id as string || ''">
    <span>{{ props.label }}</span>
    <input
      v-bind="attrs"
      v-model="value"
      type="text"
      :placeholder="attrs.placeholder as string || defaultPlaceholder"
    />
  </label>
</template>

<style scoped>
  label {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;
  }

  label > span {
    font-size: .75em;
  }

  input {
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    outline: unset;
    padding: .6em 1.2em;
    font-size: 1em;
  }
  input:hover, input:focus {
    border-color: #646cff;
  }
  label:has(input:hover) > span, label:has(input:focus) > span {
    color: #646cff;
    filter: brightness(80%);
  }
</style>
