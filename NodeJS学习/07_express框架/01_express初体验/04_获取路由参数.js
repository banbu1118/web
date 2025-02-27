//导入express模块
const express = require('express')

//创建应用对象
const app = express()

//创建路由
app.get('/:id.html', (req, res) => {
    //获取url路由参数
    console.log(req.params.id);
    
    res.setHeader('Content-Type', 'text/html;charset=utf-8')

    res.end('商品详情')
})

//监听端口
app.listen(3000, () => {
    console.log('服务器启动成功，监听端口3000');

})