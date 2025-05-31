<template>
    <h3>数组变化侦听</h3>
    <button @click="addListHandler">添加数据</button>
    <ul>
        <li v-for="(item, index) of names" :key="index">{{ item }}</li>
    </ul>
    <button @click="concatHandler">合并数组</button>
    <h3>数组1</h3>
    <p v-for="(item, index) of nums1" :key="index">{{ item }}</p>
    <h3>数组2</h3>
    <p v-for="(item, index) of nums2" :key="index">{{ item }}</p>
</template>

<script>
export default {
    data() {
        return {
            names: ["iwen", "ime", "frank"],
            nums1: [1, 2, 3],
            nums2: [4, 5, 6]
        }
    },
    methods: {
        addListHandler() {
            //引起UI自动更新
            // this.names.push("sakura");

            //不会引起UI自动更新
            this.names.concat(["sakura"]);
            console.log(this.names.concat(["sakura"]));
        },
        concatHandler() {
            this.nums1 = this.nums1.concat(this.nums2);
        }
    }
}
</script>