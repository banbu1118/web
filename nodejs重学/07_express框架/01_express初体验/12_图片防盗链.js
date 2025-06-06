//导入express
const express = require('express')

//创建应用对象
const app = express()

//声明中间件
app.use((req, res, next) => {
    //检查请求头中的referer字段，判断是否来自127.0.0.1
    //获取referer
    let referer = req.get('referer')

    if (referer) {
        //实例化
        let url = new URL(referer)

        //获取hostname
        let hostname = url.hostname

        //判断是否来自127.0.0.1
        if (hostname !== '127.0.0.1') {
            //响应404
            res.status(404).send('<h1>404 Not Found</h1>')
            return
        }
    }

    next()

})
//静态资源中间件设置
app.use(express.static(__dirname + '/public'))

//监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已经启动，端口为3000监听中...')
})