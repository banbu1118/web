/* 
    按照要求搭建http服务

    get /login 显示表单页面
    post /login 获取表单中的用户名和密码
*/
//导入express模块
const express = require('express');
//导入body-parser中间件
const bodyParser = require('body-parser');

//创建应用对象
const app = express();

//解析json格式的请求体的中间件
const jsonParser = bodyParser.json()

//解析querystring格式的请求体的中间件
const urlencodedParser = bodyParser.urlencoded({ extended: false })

//创建路由规则
app.get('/login', (req, res) => {
    // res.send('表单页面')
    //响应html文件内容
    res.sendFile(__dirname + '/11_form.html')
})

//post规则
app.post('/login', urlencodedParser, (req, res) => {
    // res.send('获取用户数据')
    //获取用户名和密码
    console.log(req.body);
    res.send('获取用户数据')
})

//启动服务
app.listen(3000, () => {
    console.log('server is running...');

})