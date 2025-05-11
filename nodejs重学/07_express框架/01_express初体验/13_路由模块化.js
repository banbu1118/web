/* 
    针对/admin /setting 的请求，需要url携带code=521参数，如未携带提示【暗号错误】
*/

//导入express
const express = require('express')

//导入路由
const homeRouter = require('./routes/homeRouter')
const adminRouter = require('./routes/adminRouter')

//创建应用对象
const app = express()

//设置
app.use(homeRouter)
app.use(adminRouter)

//403
app.all('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})

//监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已经启动，端口为3000监听中...')
})