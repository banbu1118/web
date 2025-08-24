<script setup>
//导入子组件
import Header from "@/components/header.vue"
import Footer from "@/components/footer.vue"
</script>

<template>
    <Header></Header>

    <router-view></router-view>

    <Footer></Footer>
</template>

<style scoped></style>