//导入express模块
const express = require('express')

//创建应用对象
const app = express()

//创建路由
app.get('/home', (req, res) => {
    res.end('hello express')
})

app.get('/', (req, res) => {
    res.end('home page')
})

//post
app.post('/login', (req, res) => {
    res.end('login login')
})

//匹配所有方法
app.all('/test', (req, res) => {
    res.end('all test')
})

//404响应
app.all('*', (req, res) => {
    res.end('404 not found')
})

//监听端口
app.listen(3000, () => {
    console.log('服务器启动成功，监听端口3000');

})