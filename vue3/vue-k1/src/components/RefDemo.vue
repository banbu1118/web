<template>
    <div ref="container" class="container">{{ content }}</div>
    <input type="text" ref="username">
    <button @click="getElementHandle">获取元素</button>

</template>

<script>
export default {
    data() {
        return {
            content: '内容'
        }
    },
    methods: {
        getElementHandle() {
            console.log(this.$refs.container.innerHTML="新内容");
            console.log(this.$refs.username.value);
            
            
        }
    }
}
</script>