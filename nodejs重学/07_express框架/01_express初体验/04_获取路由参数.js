//导入express
const express = require('express')

//创建应用对象
const app = express()

//创建路由
// :id 意味着这个位置可以匹配任何内容，这个内容称为路由参数
app.get('/:id.html', (req, res) => {
    //获取url路由参数
    console.log(req.params.id);
    
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.send('商品详情')
})

//监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已经启动，端口为3000监听中...')
})