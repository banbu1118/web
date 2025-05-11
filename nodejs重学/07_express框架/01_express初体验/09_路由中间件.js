/* 
    针对/admin /setting 的请求，需要url携带code=521参数，如未携带提示【暗号错误】
*/

//导入express
const express = require('express')

//创建应用对象
const app = express()

//创建路由
//前台首页
app.get('/home', (req, res) => {
    res.send('前台首页')
})


//声明中间件
let checkCodeMiddleware = (req, res, next) => {
    //判断url参数是否为521
    if (req.query.code === '521') {
        next()
    }
    else {
        res.send('暗号错误')
    }
}

//后台首页
app.get('/admin', checkCodeMiddleware, (req, res) => {
    res.send('后台首页')
})

//后台设置页面
app.get('/setting', checkCodeMiddleware, (req, res) => {
    res.send('后台设置页面')
})

//403
app.all('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})

//监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已经启动，端口为3000监听中...')
})