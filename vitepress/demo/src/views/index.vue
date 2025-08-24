<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goTo = () => {
    router.push({ name: 'member', params: { id: 200, name: 'kk' } })
}
</script>

<template>
    首页 - dengruicode.com

    <router-link to="/content?id=100&title=邓瑞编程">查询字符串</router-link><br>
    <router-link to="/user/007/name/">路径传参数</router-link>

    <router-link :to="{ path: '/content', query: { id: 200, title: 'vue3' } }">查询字符串-动态属性绑定</router-link>
    <router-link :to="{ name: 'member', params: { id: 200, name: 'kk' } }">查询字符串-动态属性绑定</router-link>

    <button @click="goTo">编程式导肮</button>
</template>

<style scoped></style>