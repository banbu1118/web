const express = require('express');

const app = express();

app.get('/login', (req, res) => {
    res.send('表单页面')
});

app.post('/login', (req, res) => {
    res.send('获取用户数据')
});


app.listen(3000, () => {
    console.log('服务已启动，端口 3000');
});