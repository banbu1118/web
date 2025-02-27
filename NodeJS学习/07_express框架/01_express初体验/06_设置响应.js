//导入express模块
const express = require('express')

//创建应用对象
const app = express()

//创建路由
app.get('/response', (req, res) => {
    //原生响应
    // res.statusCode = 404
    // res.statusMessage = 'love'
    // res.setHeader('xxx', 'yyy')
    // res.write('hello ')
    // res.end('hello express')

    //express响应
    // res.status(500)
    // res.set('aaa','bbb')
    // res.send('你好 express')

    //连续写
    res.status(500).set('aaa', 'bbb').send('你好 express ok')

})

//监听端口
app.listen(3000, () => {
    console.log('服务器启动成功，监听端口3000');

})