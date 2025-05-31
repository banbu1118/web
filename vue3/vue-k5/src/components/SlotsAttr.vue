<template>
    <h3>Slots再续集</h3>
    <slot name="header" :msg="childMessage"></slot>
    <slot name="main" :demo="demoMeaasge"></slot>
</template>

<script>
export default {
    data() {
        return {
            childMessage: "子组件数据",
            demoMeaasge: "子组件数据-2"
        }
    }
}
</script>

<style></style>