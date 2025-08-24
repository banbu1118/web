import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// createApp(App).use(router).mount('#app')

const app = createApp(App)

app.use(router)

//全局前置守卫
router.beforeEach((to, from, next) => {
    console.log("to:", to) //即将进入的路由的信息
    console.log("from:", from) //当前即将离开的路由信息

    // next()

    if (to.name == "member") {
        next(false) //拦截
    } else {
        next() //继续
    }
})

app.mount('#app')
