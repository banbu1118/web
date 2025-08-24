import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        // alias: '/home',
        alias: ['/home', '/index'],
        component: () => import('@/views/index.vue')
    },
    {
        path: '/content',
        component: () => import('@/views/content.vue')
    },
    {
        path: '/user/:id/name/:name?',
        name: 'member',
        component: () => import('@/views/user.vue')
    },
    {
        path: '/vip',
        component: () => import('@/views/vip.vue'),
        children: [
            {
                path: '',
                component: () => import('@/views/vip/default.vue')
            },
            {
                path: 'order',
                component: () => import('@/views/vip/order.vue')
            },
            {
                path: 'info',
                component: () => import('@/views/vip/info.vue')
            }
        ]
    },
    {
        path: '/svip',
        // redirect: '/vip'
        redirect: { name: 'member', params: { id: 200, name: 'jack' } }
    }
]

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes
})

export default router