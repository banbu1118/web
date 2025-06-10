//引用createApp用于创建应用实例
import { createApp } from 'vue'

//导入App组件
import App from './App.vue'

//创建应用实例
const app = createApp(App)
app.mount('#app')