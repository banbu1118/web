<template>
    <h3>事件传参</h3>
    <button @:click="addCount('hello')">Add</button>
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
        addCount(msg) {
            // e.target.innerHTML = "Add" + this.count;
            console.log(msg);
            
            this.count++
        }
    }
}
</script>