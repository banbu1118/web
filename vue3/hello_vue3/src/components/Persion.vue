<template>
    <div class="persion">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="showTel">查看练习方式</button>
    </div>
</template>

<script>
export default {
    name: 'Persion',
    data() {
        return {
            name: '张三',
            age: 18,
            tel: '13800138000'
        }
    },
    methods: {
        showTel() {
            alert(this.tel)
        }
    }

}
</script>

<style scoped>
.persion {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>