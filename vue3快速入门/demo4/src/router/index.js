import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        //alias:"/home", //定义别名 http://localhost:5173/home
        alias: ["/home", "/index"], // http://localhost:5173/home http://localhost:5173/index
        // component: () => import("../views/index.vue")
        component: () => import("@/views/index.vue")
    },
    {
        path: "/content", // 使用查询字符串传递参数 http://localhost:5173/content?id=100&title=邓瑞编程
        component: () => import("@/views/content.vue")
    },
    {
        //可选参数 name? 表示该参数不是必需的
        path: "/userHistory/:id/name/:name?", // http://localhost:5173/userHistory/007/name
        name: "history", // 定义路由名称
        component: () => import("@/views/user.vue")
    },
    {
        path: "/vip",
        component: () => import("@/views/vip.vue"),
        children: [
            {
                path: "",
                component: () => import("@/views/vip/default.vue")
            },
            {
                path: "order",
                component: () => import("@/views/vip/order.vue")
            },
            {
                path: "info",
                component: () => import("@/views/vip/info.vue")
            },
        ]
    },
    {
        path: "/svip",
        //  redirect:"/vip"
        redirect: { name: 'history', params: { id: '100', name: 'David' } }
    }

]

const router = createRouter({
    // 使用url的#符号之后的部分模拟url路径的变化,因为不会触发页面刷新,所以不需要服务端支持
    // history: createWebHashHistory(), 
    history: createWebHistory(),
    routes
})

export default router