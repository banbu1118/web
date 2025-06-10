<template>
    <div class="person">
        姓：<input type="text" v-model="firstName"><br>
        名：<input type="text" v-model="lastName"><br>
        全名：<span>{{ fullName}}</span>
    </div>

</template>

<script>
import { ref,computed } from 'vue'
export default {
    name: 'Person'
}
</script>

<script setup>
let firstName = ref('zhang')
let lastName = ref('san')

let fullName = computed(() => {
    return 678
})

</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px
}

li {
    font-size: 20px;
}
</style>