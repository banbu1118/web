//导入express
const express = require('express')

//创建应用对象
const app = express()

//创建路由
app.get('/response', (req, res) => {
    //原生响应
    // res.statusCode = 404
    // res.statusMessage = 'love'
    // res.setHeader('xxx', 'yyy')
    // res.write('hello, express ')
    // res.end('response')

    //express响应
    // res.status(500)
    // res.set('aaa', 'bbb')
    // res.send('中文 response')

    //链式调用
    res.status(500).set('aaa', 'bbb').send('中文 response')
})

//监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已经启动，端口为3000监听中...')
})