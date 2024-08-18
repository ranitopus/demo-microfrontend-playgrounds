<script lang="ts" setup>
  import { ref } from 'vue'

  // @ts-expect-error
  import UiButton from 'shared_components/UiButton'
  // @ts-expect-error
  import UiModal from 'shared_components/UiModal'

  const showModal = ref(false)

  function handleButtonClick() {
    alert('This is an action from Page 1.')
  }
</script>

<template>
  <div class="page-wrapper">
    <h2>MF003 Page 1 Content</h2>
    <p>
      <ui-button @click="handleButtonClick">
        Show alert pop-up
      </ui-button>
    </p>
    <p>
      <ui-button @click="showModal = true">
        Show modal
      </ui-button>
    </p>
  </div>
  <ui-modal v-model="showModal" class="page1__modal">
    <p>Is this modal cool?</p>
    <div class="page1__modal__actions">
      <ui-button class="page1__modal__yes-btn">Yeah</ui-button>
      <ui-button class="page1__modal__no-btn">Nah</ui-button>
    </div>
  </ui-modal>
</template>

<style scoped>
 .page-wrapper {
  padding: .375em;
 }

 .page1__modal__actions {
  display: flex;
  gap: .75rem;
 }

 .page1__modal__yes-btn {
    background-color: springgreen;
  }

  .page1__modal__no-btn {
    background-color: tomato;
  }
</style>