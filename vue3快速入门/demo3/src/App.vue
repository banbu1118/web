<script setup>
import { userWebStore } from './stores/web';

const webStore = userWebStore();

console.log(webStore.web);
console.log(webStore.users);

</script>

<template>
  {{ webStore.web.url }}
  {{ webStore.users }}

  <button @click="webStore.userAdd">添加数据</button>
</template>

<style scoped></style>