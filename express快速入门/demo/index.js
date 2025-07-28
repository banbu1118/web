const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.send('前台首页')
});

app.get('/search', (req, res) => {
    res.send('内容搜索')
});

app.get('/admin', (req, res) => {
    res.send('首台首页')
});
app.get('/setting', (req, res) => {
    res.send('设置页面')
});

app.listen(3000, () => {
    console.log('服务已启动，端口 3000');
});