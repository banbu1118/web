<template>
    <h3>事件传参</h3>
    <button @:click="addCount">Add</button>
    <p>{{ count }}</p>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        addCount(e) {
            e.target.innerHTML = "Add" + this.count;
            this.count++
        }
    }
}
</script>