import { createApp } from 'vue'
import App from './App.vue'

//路由
import router from './router' //导入路由模块

//整体导入 ElementPlus 组件库
import ElementPlus from 'element-plus' //导入 ElementPlus 组件库的所有模块和功能 
import 'element-plus/dist/index.css' //导入 ElementPlus 组件库所需的全局 css 样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue' //导入 ElementPlus 组件库中的所有图标
import zhCn from 'element-plus/dist/locale/zh-cn.mjs' //导入 ElementPlus 组件库的中文语言包

//Pinia
import { createPinia } from 'pinia' //导入Pinia的createPinia方法,用于创建Pinia实例(状态管理库)
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia() //创建一个Pinia实例, 用于在应用中集中管理状态(store)
pinia.use(piniaPluginPersistedstate) //将持久化存储插件添加到 pinia 实例上


const app = createApp(App)

app.use(pinia) //将 Pinia 实例注册到 Vue 应用中

app.use(router) //将 Vue Router 插件注册到 Vue 应用中

//注册 ElementPlus 组件库中的所有图标到全局 Vue 应用中
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus, { //将 ElementPlus 插件注册到 Vue 应用中
    locale: zhCn // 设置 ElementPlus 组件库的区域语言为中文简体
})

app.mount('#app')