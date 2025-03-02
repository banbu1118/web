//导入 express
const express = require('express');

//创建应用对象
const app = express();

//创建路由规则
app.get('/home', (req, res) => {
    res.end('hello express server');
});

//监听端口 启动服务
app.listen(3000, () => {
    console.log('服务已经启动, 端口监听为 3000...');
});