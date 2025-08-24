<script setup>
import { useWebStore } from './stores/web';


const webStore = useWebStore();

console.log(webStore.web);
console.log(webStore.users);

</script>

<template>

  {{ webStore.web.url }}
  {{ webStore.users }}

  <button @click="webStore.userAdd">添加用户</button>

</template>

<style scoped></style>