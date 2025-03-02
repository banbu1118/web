//导入 express
const express = require('express');

//创建应用对象
const app = express();

//创建路由规则
app.get('/response', (req, res) => {
    //1.express中设置响应的方式兼容http模块的方式
    res.statusCode = 404;
    res.statusMessage = 'xxx';
    //设置响应头utf-8编码，让响应的内容不乱码
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.write('响应体');
    res.end('xxx');

    //2. express 的响应方法
    res.status(500); //设置响应状态码
    res.set('xxx', 'yyy');//设置响应头
    res.send('中文响应不乱码');//设置响应体
    //连贯操作
    res.status(404).set('xxx', 'yyy').send('你好朋友')

    //3. 其他响应
    res.redirect('http://atguigu.com')//重定向
    res.download('./package.json');//下载响应
    res.json();//响应 JSON
    res.sendFile(__dirname + '/home.html') //响应文件内容  
});

//监听端口 启动服务
app.listen(3000, () => {
    console.log('服务已经启动, 端口监听为 3000...');
});