<template>
    <h3>组件声明周期函数应用</h3>
    <p ref="name">百战程序员</p>
    <ul>
        <li v-for="(item, index) of banner" :key="index">
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            banner: []
        }
    },
    beforeMount() {
        console.log(this.$refs.name);  //undefined
    },
    mounted() {
        console.log(this.$refs.name);  //<p>百战程序员</p>

        
        //模拟网络请求
        this.banner = [
            {
                "title": "爱尔兰",
                "content": "爱尔兰是一座位于北美洲的国家，是北美最大的岛国之一。"
            },
            {
                "title": "东京",
                "content": "日本的夏天"
            },
            {
                "title": "巴黎",
                "content": "法国的夏天"
            },
            {
                "title": "柏林",
                "content": "德国的夏天"
            }
        ]
    }
}

</script>