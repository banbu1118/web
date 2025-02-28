//导入express模块
const express = require('express')
//导入path模块
const path = require('path')

//创建应用对象
const app = express()

//设置模板引擎
app.set('view engine', 'ejs')

//设置模板文件目录  模板文件：具有模板语法内容的文件
app.set('views', path.resolve(__dirname, './views'))

//创建路由
app.get('/home', (req, res) => {
    //rander响应
    // res.render('模板的文件名','数据')
    //声明一个变量
    let title = '尚硅谷 - 让天下没有难学的技术'
    res.render('home',{title})
    //创建模板文件
})

//监听端口
app.listen(3000, () => {
    console.log('服务器启动成功，监听端口3000');

})