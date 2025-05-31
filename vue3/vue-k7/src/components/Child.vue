<template>
    <h3>Child</h3>
    <p>{{ fullMessage }}</p>
</template>

<script>
export default {
    inject: ['message'],
    data() {
        return {
            fullMessage: this.message
        }
    }
}
</script>