import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const userWebStore = defineStore('web', () => {
    const web = reactive({
        title: "邓瑞编程",
        url: "dengruicode.com"
    })

    const users = ref(1000)

    const userAdd = () => {
        users.value++
    }

    return {
        web,
        users,
        userAdd
    }
},{
    persist: true
})