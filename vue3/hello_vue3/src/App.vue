<template>
    <div>
        <h1 class="app">你好啊</h1>
        <Persion></Persion>
    </div>
</template>

<script>
import Persion from './components/Persion.vue'

export default {
    name: 'App',
    components: { Persion }
}
</script>

<style>
.app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>