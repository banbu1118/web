<script setup>
import { reactive, toRefs,toRef } from 'vue'

let web = reactive({
  name: "邓瑞编程",
  url: "dengruicode.com"
})

// let { name, url } = toRefs(web)

let url =toRef(web, 'url')

console.log(url);

</script>

<template>
{{ url }}
</template>

<style scoped></style>