<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <p>年龄：{{ age }}</p>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看练习方式</button>
    </div>

</template>

<script>
export default {
    name: 'Person',

    setup() {
        let name = '张三'
        let age = 25
        let tel = '13812345678'

        function changeName() {
            name = 'zhang-san'
        }
        function changeAge() {
            age += 1
        }

        function showTel() {
            alert(tel)
        }
        return {
            name,
            age,
            tel,
            changeName,
            changeAge,
            showTel
        }

        // return function() {
        //     return "哈哈哈"
        // }
    }
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
</style>