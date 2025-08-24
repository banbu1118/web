import { createRouter, createWebHistory } from "vue-router"
import { useAdminStore } from '@/stores/admin/admin.js'
import { ElMessage } from 'element-plus'
import TimeDR from '@/utils/TimeDR.js'
import LocalDR from '@/utils/LocalDR.js'



const routes = [
    {
        path: "/", // http://localhost:5173/
        redirect: "/admin" // 重定向
    },
    {
        path: "/login", // http://localhost:5173/login
        // component: () => import("../views/admin/login.vue")
        component: () => import("@/views/admin/login.vue")
    },
    {
        path: "/admin", // http://localhost:5173/admin
        component: () => import("@/views/admin/home.vue"),
        meta: { requiresAuth: true }, //身份验证
        children: [
            //管理员
            {
                path: "administrator/add", // http://localhost:5173/admin/administrator/add
                component: () => import("@/views/admin/administrator/add.vue")
            },
            {
                path: "administrator/edit", // http://localhost:5173/admin/administrator/edit
                component: () => import("@/views/admin/administrator/edit.vue")
            },
            {
                path: "administrator/list", // http://localhost:5173/admin/administrator/list
                component: () => import("@/views/admin/administrator/list.vue")
            },
            //类别管理
            {
                path: "category/list", // http://localhost:5173/admin/category/list
                component: () => import("@/views/admin/category/list.vue")
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


//全局前置守卫
router.beforeEach((to, from, next) => {
    // console.log(to.meta.requiresAuth);
    if (to.meta.requiresAuth) {
        // console.log("需要身份认证");

        const adminStore = useAdminStore()

        if (adminStore.data.token === "") {
            console.log("未登录");

            router.push("/login")

        }

        //校验登录状态是否过期
        //let startTime = "2024-05-01 00:00:00"
        let startTime = TimeDR.now()
        let endTime = adminStore.data.expireDate
        let timeSubResult = TimeDR.timeSub(startTime, endTime)
        // console.log(timeSubResult)
        if (timeSubResult.expire) { //已过期
            ElMessage.error("登录已过期, 请重新登录")

            LocalDR.remove("admin") //删除 localStorage 中的 key
            router.push("/login") //跳转至登录页
        }

        next()

    } else {
        console.log("不需要身份认证");

        next()
    }

})

export default router