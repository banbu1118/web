<template>
  <div :id="dynamicId" :class="msg" v-bind:title="dynamicTitle">测试</div>
  <button :disabled="isButtonDisabled">Button</button>
  <div v-bind="objectOfAttrs">kk</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "active",
      dynamicId: "appid",
      dynamicTitle: null,
      isButtonDisabled: false,
      objectOfAttrs: {
        msg: "active",
        dynamicId: "appid"
      }
    }
  }
}
</script>

<style>
.active {
  color: red;
  font-size: 30px;
}
</style>