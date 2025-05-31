<template>
    <h3>ComponentB</h3>
    <p>{{ title }}</p>
    <p>{{ onEvent('传递数据！') }}</p>

</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        title: String,
        onEvent: Function
    }
}

</script>