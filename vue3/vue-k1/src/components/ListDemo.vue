<template>
    <h3>列表渲染</h3>
    <p v-for="(item, index) of names">{{ item }}-{{ index }}</p>
    <div v-for="item of result">
        <p>{{ item.title }}</p>
        <a :href="item.avator">{{ item.avator }}</a>
    </div>
    <div>
        <p v-for="(value, key, index) of userInfo">{{ value }}-{{ key }}-{{ index }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            names: ['张三', '李四', '王五'],
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
            userInfo: {
                name: "iwen",
                age: 25,
                sex: "男"
            }
        }
    }
}
</script>