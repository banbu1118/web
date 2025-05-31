<template>
  <h3>祖宗</h3>
  <Parent />

</template>

<script>
import Parent from './components/Parent.vue'

export default {
  data() {
    return {
      meessage: "祖宗的财产!!!"
    }
  },
  // provide: {
  //   message: "爷爷的财产"
  // },
  provide() {
    return {
      message: this.meessage
    }
  },
  components: {
    Parent
  }
}

</script>