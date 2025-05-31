<template>
    <h3>Slots续集</h3>
    <slot name="header">插槽默认值</slot>
    <a href="#">我是插入在中间的内容</a>
    <slot name="main">插槽默认值2</slot>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>