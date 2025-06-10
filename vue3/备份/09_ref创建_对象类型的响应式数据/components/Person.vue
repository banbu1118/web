<template>
    <div class="person">
        <h2>汽车信息：一辆{{ car.brand }}，车价值：{{ car.price }}万元</h2>
        <button @click="changePrice">修改汽车的价格</button>
        <br>
        <h2>游戏列表：</h2>
        <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
        <button @click="changeFirstGame">修改第一个游戏的名字</button>
    </div>

</template>

<script>

import { ref,reactive } from 'vue'

export default {
    name: 'Person'
}
</script>

<script setup>
let car = ref({ brand: '奔驰', price: 100 })

let games = ref([
    { id: 'adfsdfef01', name: '王者荣耀' },
    { id: 'adfsdfef02', name: '原神' },
    { id: 'adfsdfef03', name: '三国志' }
])

let obj = reactive({x:999})

console.log(car);
console.log(obj);



function changePrice() {
    car.value.price += 10
}

function changeFirstGame() {
    games.value[0].name = '流星蝴蝶剑'
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