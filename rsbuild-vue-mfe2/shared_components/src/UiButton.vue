<script lang="ts" setup>
  const placeholderText = 'Click me!'
</script>

<template>
  <button><slot>{{ placeholderText }}</slot></button>
</template>

<style scoped>
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    outline: unset;
    box-shadow: .0625em .125em .125em 0 rgba(0, 0, 0, .5);
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    font-variant: small-caps;
    letter-spacing: .0625em;
    background-color: #1a1a1a;
    color: rgba(255, 255, 255, 0.87);
    cursor: pointer;
    transition: border-color .25s, box-shadow .25s, transform .25s, filter .25s;
  }
  button:hover, button:focus {
    border-color: #646cff;
    box-shadow: .125em .25em .5em 0 rgba(0, 0, 0, .375);
    transform: translateY(-0.0625em);
    filter: brightness(95%);
  }
  @media (prefers-color-scheme: light) {
    button {
      color: #213547;
      background-color: #f8f8f8;
    }
  }
</style>