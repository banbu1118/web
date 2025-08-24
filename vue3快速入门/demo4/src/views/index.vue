	<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter()

    let userId = 100
    let userName = "邓瑞"

    const goTo = () => {
        //router.push("/user/007/name/邓瑞")
        //router.push({ path: '/content', query: { id: 200, title: '邓瑞' } })
        router.push({ name: 'history', params: { id: '300', name: '邓瑞编程' } })
    }
</script>

	<template>
        首页 - dengruicode.com
        <hr>

        <router-link to="/content?id=100&title=邓瑞编程">查询字符串传参</router-link> <br>
        <router-link to="/user/007/name/邓瑞">路径传参</router-link> <br>

        <!-- 动态属性绑定 -->
        <router-link :to="{ path: '/content', query: { id: 200, title: '邓瑞' } }">查询字符串传参 - 动态属性绑定</router-link> <br>
        <router-link :to="{ path: `/user/${userId}/name/${userName}` }">路径传参 - 动态属性绑定</router-link> <br>

        <!-- 定义路由名称 -->
        <router-link :to="{ name: 'history', params: { id: '300', name: '邓瑞编程' } }">路径传参 - 定义路由名称</router-link> <br>

        <!-- 编程式导航 -->
        <button @click="goTo()">编程式导航</button>
    </template>

<style scoped></style>