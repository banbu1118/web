<template>
    <h3>侦听器</h3>
    <p>{{ msg }}</p>
    <button @click="updateHandler">修改数据</button>
</template>

<script>
export default {
    data() {
        return {
            msg: "Hello"
        }
    },
    methods: {
        updateHandler() {
            this.msg = "World"
        }
    },
    watch: {
        msg(newVal, oldVal) {
            console.log(newVal + "<-" + oldVal)
        }
    }
}
</script>