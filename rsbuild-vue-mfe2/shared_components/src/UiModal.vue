<script lang="ts" setup>
  import { watch, useAttrs } from 'vue'

  defineOptions({
    inheritAttrs: false
  })

  const show = defineModel<boolean>({default: false})
  const attrs = useAttrs()
  const placeholderText = 'Modal content'

  function initToggleModal(el: HTMLDialogElement | null) {
    watch(show, newValue => {
      if (!el || !document.body.contains(el)) return;
      newValue ? el.showModal() : el.close()
    }, {immediate: true})
  }
</script>

<template>
  <teleport to="body" v-if="show">
    <dialog v-bind="attrs" :ref="(el) => initToggleModal(el as HTMLDialogElement)">
      <button aria-roledescription="close" @click="show = false"><i>&times;</i></button>
      <slot>{{ placeholderText }}</slot>
    </dialog>
  </teleport>
</template>

<style scoped>
  dialog {
    box-shadow: .0625em .125em .25em 0 rgba(0, 0, 0, .5);
    border: none;
    border-radius: 8px;
    padding: 2rem 3rem;
  }

  dialog[open]::backdrop {
    background-color: rgba(255, 255, 255, .25);
    backdrop-filter: blur(8px);
  }

  dialog button[aria-roledescription="close"],
  dialog button[aria-roledescription="close"] i {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    overflow: hidden;
  }

  dialog button[aria-roledescription="close"] {
    position: absolute;
    opacity: .375;
    top: .25rem;
    right: .25rem;
    border: none;
    outline: none;
    border-radius: 50%;
    padding: 0;
    background-color: firebrick;
    cursor: pointer;
  }

  dialog button[aria-roledescription="close"]:hover {
    opacity: 1;
  }

  dialog button[aria-roledescription="close"] i {
    padding-top: .125rem;
    padding-right: .125rem;
    line-height: 1.5rem;
    font-size: 1.5rem;
    color: #fff;
  }
</style>
