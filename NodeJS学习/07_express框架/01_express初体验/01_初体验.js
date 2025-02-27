//导入express模块
const express = require('express')

//创建应用对象
const app = express()

//创建路由
app.get('/home', (req, res) => {
    res.end('hello express')
})

//监听端口
app.listen(3000, () => {
    console.log('服务器启动成功，监听端口3000');

})