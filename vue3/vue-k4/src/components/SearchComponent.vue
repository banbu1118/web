<template>
    搜索信息：<input type="text" v-model="search">

</template>

<script>
export default {
    data() {
        return {
            search: ''
        }
    },
    watch: {
        search(newVal, oldVal) {
            this.$emit("searchEvent", newVal)
        }
    }
}
</script>