<template>
    <div class="person">
        <h2>汽车信息：一辆{{ car.brand }}，车价值：{{ car.price }}万元</h2>
        <button @click="changeBrand">修改汽车的品牌</button>
        <button @click="changePrice">修改汽车的价格</button>
        <button @click="changecar">修改汽车</button>
        <hr>
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum">点我sum+1</button>
    </div>

</template>

<script>

import { ref, reactive } from 'vue'

export default {
    name: 'Person'
}
</script>

<script setup>
let car = reactive({ brand: '奔驰', price: 100 })
let sum = ref(0)

function changeBrand() {
    car.brand = '宝马'
}
function changePrice() {
    car.price += 10
}

function changeSum() {
    sum.value += 1
}

function changecar() {
    Object.assign(car, { brand: '奥迪', price: 200 })
}
</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px
}

li {
    font-size: 20px;
}
</style>