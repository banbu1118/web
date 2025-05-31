<template>
    <h3>ComponentA</h3>
    <p>{{ message }}</p>
    <button @click="updateHandler">更新数据</button>
</template>

<script>

export default {
    data() {
        return {
            message: "老数据"
        }
    },
    beforeUnmount() {
        console.log("组件被卸载之前");

    },
    unmounted() {
        console.log("组件被销毁之后");

    },
    methods: {
        updateHandler() {
            this.message = "新数据"
        }
    }
}
</script>