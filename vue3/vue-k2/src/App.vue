<template>
  <!-- 第三步：显示组件 -->
  <MyComponent />
  <my-component />
  <div class="container">测试</div>

</template>

<script>
//第一步：引入组件
import MyComponent from './components/MyComponent.vue'

export default {
  //第二步：注入组件
  components: {
    MyComponent: MyComponent
  }
}
</script>

<style></style>