/* 
    按照要求搭建http服务

    GET /login 显示表单登陆网页
    POST /login 获取表单中的用户名和密码
*/

//导入express模块
const express = require('express');

//导入body-parser中间件
const bodyParser = require('body-parser');


//创建应用对象
const app = express();

//解析json格式的请求体中间件
// const jsonParser = bodyParser.json();

//解析querystring格式的请求体中间件
const urlencodedParser = bodyParser.urlencoded({ extended: false });

//创建路由规则
app.get('/login', (req, res) => {
    // res.send('表单页面')
    //响应html内容
    res.sendFile(__dirname + '/11_form.html')
})

app.post('/login', urlencodedParser, (req, res) => {
    //获取用户名和密码
    // const { username, password } = req.body;

    // console.log(username, password);
    console.log(req.body);

    res.send('获取用户名和密码')
})

//启动服务
app.listen(3000, () => {
    console.log('服务器启动成功，监听端口3000')
})