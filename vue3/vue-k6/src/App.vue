<template>
  <!-- <UseComponent /> -->
  <keep-alive>
    <component :is="tabComponent"> </component>
  </keep-alive>

  <button @click="changgeHandler">切换组件</button>

</template>

<script>
// import UseComponent from './components/UseComponent.vue'
import ComponentA from './components/ComponentA.vue'
// import ComponentB from './components/ComponentB.vue'
import { defineAsyncComponent } from 'vue'
//异步加载组件
const ComponentB = defineAsyncComponent(() =>
  import('./components/ComponentB.vue'))

export default {
  data() {
    return {
      tabComponent: "ComponentA"
    }
  },
  components: {
    // UseComponent
    ComponentA,
    ComponentB
  },
  methods: {
    changgeHandler() {
      console.log(111);

      this.tabComponent = this.tabComponent == "ComponentA" ? "ComponentB" : "ComponentA"
    }
  }
}
</script>