/* 
    针对 /admin /setting的请求，要求url携带code=521参数，如未携带提示[暗号错误]
*/

/* 
    记录每个请求的url与ip地址
*/

//导入express模块
const express = require('express')

//创建应用对象
const app = express()

//创建路由
app.get('/home', (req, res) => {
    res.send('前台首页')
})

//声明中间件
let checkCodeMiddleware = (req, res, next) => {
    //判断url中是否携带code参数
    if (req.query.code === '521') {
        next()
    } else {
        res.send('暗号错误')
    }
}
//后台
app.get('/admin', checkCodeMiddleware, (req, res) => {
    res.send('后台首页')
})

//settings
app.get('/setting', checkCodeMiddleware, (req, res) => {
    res.send('设置页面')
})

app.get('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})

//监听端口
app.listen(3000, () => {
    console.log('服务器启动成功，监听端口3000');

})