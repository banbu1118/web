//导入 express
const express = require('express');

//创建应用对象
const app = express();

//创建路由规则
app.get('/home', (req, res) => {
    res.send('网站首页');
});

//首页路由
app.get('/', (req, res) => {
    res.send('我才是真正的首页')
})

//登陆post路哟
app.post('/login', (req, res) => {
    res.send('登陆成功')
})

//匹配所有的请求
app.all('/search', (req, res) => {
    res.send('1秒钟为您找到相关结果100000000个')
})

//自定义404路由
app.all('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})

//监听端口 启动服务
app.listen(3000, () => {
    console.log('服务已经启动, 端口监听为 3000...');
});