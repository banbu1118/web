<script setup>
import '@/assets/admin/css/home.css' //导入样式
import HomeHeader from '@/components/admin/home/HomeHeader.vue' //导入 Header 组件
import HomeSide from '@/components/admin/home/HomeSide.vue' //导入侧边栏组件

</script>

<template>
    <div class="dr-home">
        <HomeHeader />

        <div class="main">
            <div class="side">
                <HomeSide />
            </div>

            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style scoped></style>