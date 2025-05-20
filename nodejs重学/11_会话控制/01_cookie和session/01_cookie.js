//导入express模块
const express = require('express')

//导入cookie-parser中间件
const cookieParser = require('cookie-parser')
const { log } = require('console')

//创建app应用
const app = express()

//使用中间件
app.use(cookieParser())

//创建路由规则
app.get('/set-cookie', (req, res) => {
    // res.cookie('name', 'zhangsan')  //会在浏览器关闭时销毁

    res.cookie('name', 'lisi', { maxAge: 1000 * 60 })  //设置过期时间为1分钟
    res.cookie('theme', 'blue')
    res.send('home')
})

//删除cookie
app.get('/remove-cookie', (req, res) => {
    //调用方法删除cookie
    res.clearCookie('name')
    res.send('删除成功')

})

//获取cookie
app.get('/get-cookie', (req, res) => {
    //获取cookie
    console.log(req.cookies);
    res.send(`欢迎您 ${req.cookies.name}`)
    
})

//启动服务
app.listen(3000)