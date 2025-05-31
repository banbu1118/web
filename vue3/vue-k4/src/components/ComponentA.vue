<template>
    <h3>ComponentA</h3>
    <p>父元素：{{ message }}</p>
    <component-b title="标题" :onEvent="dataFn"></component-b>
</template>

<script>
import ComponentB from './ComponentB.vue'
export default {
    data() {
        return {
            message: ""
        }
    },
    components: {
        ComponentB
    },
    methods: {
        dataFn(data) {
            this.message = data
        }
    }
}

</script>