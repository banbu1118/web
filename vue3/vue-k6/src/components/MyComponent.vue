<template>
  <h3>组件的生命周期</h3>
  <p>{{ message }}</p>
  <button @click="updateHandler">更新数据</button>
</template>

<script>
export default {
  data() {
    return {
      message: "更新之前"
    }
  },
  methods: {
    updateHandler() {
      this.message = "更新之后"
    }
  },
  beforeCreate() {
    console.log('组件创建之前');

  },
  created() {
    console.log('组件创建完成');
  },
  beforeMount() {
    console.log('组件挂载之前');
  },
  mounted() {
    console.log('组件挂载完成');
  },
  beforeUpdate() {
    console.log('组件更新之前');
  },
  updated() {
    console.log('组件更新完成');
  },
  beforeDestroy() {
    console.log('组件销毁之前');
  },
  destroyed() {
    console.log('组件销毁完成');
  }
}

</script>