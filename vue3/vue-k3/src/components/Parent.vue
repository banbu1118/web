<template>
    <h3>Parent</h3>
    <Child :title="message" :age="age" :names="names" :userInfo="userInfo" />
</template>

<script>
import Child from './Child.vue'

export default {
    data() {
        return {
            message: "Parent 数据",
            age: 20,
            names: ["张三", "李四", "王五"],
            userInfo: {
                name: "iwen",
                age: 25
            }
        }
    },
    components: {
        Child
    }
}
</script>