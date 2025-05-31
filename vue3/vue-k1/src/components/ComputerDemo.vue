<template>
    <h3>{{ obj.name }}</h3>
    <p>{{ objcontent }}</p>
</template>

<script>
export default {
    data() {
        return {
            obj: {
                name: "kk",
                content: ["js", "前端", "vue"]
            }
        }
    },

    //计算属性
    computed: {
        objcontent() {
            return this.obj.content.length > 0 ? "YES" : "NO"
        }
    }
}
</script>