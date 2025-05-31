<template>
    <div class="container">{{ message }}</div>
</template>

<script>
export default {
    data() {
        return {
            message: "组件基础组成"
        }
    }
}
</script>

<!-- scoped:让当前样式只在当前组件内生效 -->
<style scoped>
.container {
    font-size: 30px;
    color: red;
}
</style>