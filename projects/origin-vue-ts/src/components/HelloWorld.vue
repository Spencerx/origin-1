<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=Vue.volar"
      target="_blank"
      >Volar</a
    >
    +
    <a
      href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd"
      >Vue devtools</a
    >
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"
      >Vite Docs</a
    >
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/stores/main'

// use the mainStore
const store = useMainStore()

// extract values from the store as refs to keep reactivity
const { count } = storeToRefs(store)

defineProps<{ msg: string }>()
</script>

<style scoped>
a {
  color: #0773ff;
  font-weight: bold;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

button {
  padding: 5px 10px;
}

code,
pre {
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console,
    monospace;
  background-color: #eee;
  padding: 5px;
  border-radius: 2px;
  color: #304455;
}
</style>
