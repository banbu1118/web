//导入express
const express = require('express')

//创建应用对象
const app = express()

//创建路由
app.get('/other', (req, res) => {
    //重定向跳转响应
    // res.redirect('https://www.baidu.com')

    //下载响应
    // res.download(__dirname+'/package.json')

    //json响应
    // res.json({
    //     name: '张三',
    //     slogon: 'kkk'
    // })

    //html响应
    res.sendFile(__dirname+'/test.html')
})

//监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已经启动，端口为3000监听中...')
})