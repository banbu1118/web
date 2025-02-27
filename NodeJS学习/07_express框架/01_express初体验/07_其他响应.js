//导入express模块
const express = require('express')

//创建应用对象
const app = express()

//创建路由
app.get('/other', (req, res) => {
    //跳转响应
    // res.redirect('https://www.baidu.com')

    //下载响应
    // res.download(__dirname + "/package.json")

    //json响应
    // res.json({
    //     name: 'kk',
    //     slogon: 'hahahaha'
    // })

    //响应文件内容
    res.sendFile(__dirname + "/test.html")
})

//监听端口
app.listen(3000, () => {
    console.log('服务器启动成功，监听端口3000');

})