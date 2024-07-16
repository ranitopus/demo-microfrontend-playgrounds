<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <hello-world msg="MF001 Host App" />
  <div class="app-page-display">
    <header>Page Display</header>
  </div>
</template>

<style scoped>
  .app-page-display {
    display: flex;
    border-radius: 8px;
    border-top-left-radius: 0;
    border: 1px solid #e8e8e8;
    width: 800px;
    height: 600px;
    text-align: left;
    margin-top: 2em;
  }

  .app-page-display header {
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: -2em;
    margin-left: -1px;
    width: fit-content;
    height: 2em;
    padding: .5em .75em;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: #e8e8e8;
  }
</style>
