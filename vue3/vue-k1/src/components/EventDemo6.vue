<template>
    <h3>事件修饰符</h3>
    <a @click.prevent="clickHandler" href="https://www.baidu.com">百度</a>
    <div @click="clickDiv">
        <p @click.stop="clickP">测试冒泡</p>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        clickHandler(e) {
            // e.preventDefault();
            console.log("点击了百度");

        },
        clickDiv(e) {
            console.log("点击了div");
        },
        clickP(e) {
            // e.stopPropagation();
            console.log("点击了p");
        }
    }
}
</script>