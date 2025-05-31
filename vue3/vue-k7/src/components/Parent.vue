<template>
    <h3>Parent</h3>
    <child />
</template>

<script>
import Child from './Child.vue'

export default {
    components: {
        Child
    }
}
</script>