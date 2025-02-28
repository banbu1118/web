//导入express模块
const express = require('express')
//导入自定义模块
const homeRouter = require('./routers/homeRouter')
const adminRouter = require('./routers/adminRouter')

//创建应用对象
const app = express(homeRouter)

//设置
app.use(homeRouter)
app.use(adminRouter)

app.get('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})

//监听端口
app.listen(3000, () => {
    console.log('服务器启动成功，监听端口3000');

})