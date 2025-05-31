<template>
    <h3>ComponentA</h3>
    <ComponentB :title="title" :age="age" />
</template>

<script>
import ComponentB from './ComponentB.vue'


export default {
    data() {
        return {
            title: "标题",
            age: 20,
            names: ["iwen", "ime"]
        }
    },
    components: {
        ComponentB
    }
}
</script>