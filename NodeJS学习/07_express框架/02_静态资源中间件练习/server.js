//导入express模块
const express = require('express')

//创建应用对象
const app = express()

//设置静态资源中间件
app.use(express.static(__dirname + '/尚品汇'))

//监听端口
app.listen(3000, () => {
    console.log('服务器启动成功，监听端口3000');

})