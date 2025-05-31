import { createApp } from 'vue'
import App from './App.vue'
import Header from './pages/Header.vue'

const app = createApp(App)

//在这中间写组件的注册
app.component('Header', Header)

app.mount('#app')

