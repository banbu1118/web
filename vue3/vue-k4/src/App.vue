<template>
  <!-- <ComponentEvent /> -->
  <!-- <Main /> -->
  <!-- <ComponentA></ComponentA> -->
    <AttrComponents class="attr-contaner"></AttrComponents>
</template>


<script>
import ComponentEvent from './components/ComponentEvent.vue'
import Main from './components/Main.vue'
import ComponentA from './components/ComponentA.vue'
import AttrComponents from './components/AttrComponents.vue'

export default {
  components: {
    ComponentEvent,
    Main,
    ComponentA,
    AttrComponents
  }
}

</script>