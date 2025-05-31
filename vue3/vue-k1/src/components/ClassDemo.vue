<template>
    <!-- <p :class="{ 'active': isActive, 'text-danger': hasError }">Class样式绑定</p> -->
    <p :class="classObject">Class样式绑定</p>
    <p :class="[arrActive, arrHasError]">class样式绑定2</p>
    <p :class="[isActive ? 'text-danger' : '']">class样式绑定3</p>
</template>

<script>
export default {
    data() {
        return {
            isActive: true,
            hasError: true,
            classObject: {
                'active': true,
                'text-danger': false
            },
            arrActive: "text-danger",
            arrHasError: "active"
        }
    }
}
</script>

<style>
.active {
    font-size: 30px;
}

.text-danger {
    color: rgb(0, 255, 34);
}
</style>