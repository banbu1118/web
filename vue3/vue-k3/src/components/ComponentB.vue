<template>
    <h3>ComponentB</h3>
    <p>{{ title }}</p>
    <p>{{ age }}</p>
    <p v-for="(item, index) of names" :key="index">{{ item }}</p>
    <button @click="updateHandler">修改数据</button>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        title: {
            type: [String, Number, Array, Object],
            required: true
        },
        age: {
            type: Number,
            default: 0
        },
        names: {
            type: Array,
            default() {
                return ["空"]
            }
        }
    },
    methods: {
        updateHandler() {
            //只读属性，不能修改
            console.log(this.title);

            // 这里禁止修改父元素传递过来数据
            // this.title = "修改后的标题";

        }
    }
}
</script>