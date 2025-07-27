const express = require('express')

const app = express()

//设置静态资源中间件
app.use(express.static(__dirname + '/尚品汇'))


app.get('/home', (req, res) => {
    res.send('这是首页')
})

app.listen(3000, () => {
    console.log('服务器启动成功')
})