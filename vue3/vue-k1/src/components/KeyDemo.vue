<template>
    <h3>Key属性添加到v-for中</h3>
    <p v-for="(item, index) in names" :key="index">{{ item }}</p>
    <div v-for="item of result" :key="item.id">
        <p>{{ item.title }}</p>
        <a :href="item.avator">{{ item.avator }}</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            names: ["张三", "李四", "王五"],
            result: [{
                "id": 123,
                "title": "第一个",
                "avator": "https://www.baidu.com"
            }, {
                "id": 456,
                "title": "第二个",
                "avator": "https://www.qq.com"
            }, {
                "id": 789,
                "title": "第三个",
                "avator": "http://www.sina.com.cn"
            }],
        }
    }
}

</script>