//导入express模块
const express = require('express')

//创建应用对象
const app = express()

//声明中间件
app.use((req, res, next) => {
    //检测请求体中的Referer字段，判断是否来127.0.0.1的请求
    //获取请求头中的Referer字段
    let referer = req.get('referer')
    if (referer) {    //实例化
        let url = new URL(referer)
        //获取hostname
        let hostname = url.hostname
        //判断
        if (hostname !== '127.0.0.1') {
            //响应404
            res.status(404).send('<h1>404 Not Found</h1>')
            return
        }
    }


    next()

})

//静态资源中间件
app.use(express.static(__dirname + '/public'))

//监听端口
app.listen(3000, () => {
    console.log('服务器启动成功，监听端口3000');

})