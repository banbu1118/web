<template>
    <p :style="{ color: activeColor, fontSize: fontSize }">Style绑定1</p>
    <p :style="styleObj">Style绑定2</p>
    <p :style="[styleObj]">Style绑定3</p>

</template>

<script>
export default {
    data() {
        return {
            activeColor: 'green',
            fontSize: '40px',
            styleObj: {
                color: 'red',
                fontSize: '30px'
            }
        }
    }
}
</script>