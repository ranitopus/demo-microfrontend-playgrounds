<script lang="ts" setup>
  // @ts-expect-error
  import UiButton from 'shared_components/UiButton'

  function handleButtonClick() {
    alert('This is an action from Page 1.')
  }
</script>

<template>
  <div class="page-wrapper">
    <h2>MF001 Page 1 Content</h2>
    <p>
      <ui-button @click="handleButtonClick">
        Show alert pop-up
      </ui-button>
    </p>
  </div>
</template>

<style scoped>
 .page-wrapper {
  padding: .375em;
 }
</style>