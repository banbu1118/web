//导入express
const express = require('express')

//导入path
const path = require('path')

//创建应用对象
const app = express()

//设置模板引擎
app.set('view engine', 'ejs')

//设置模板文件存放位置
//模板文件：具有模板内容的文件
app.set('views', __dirname + '/views')

//创建路由
app.get('/home', (req, res) => {
    //render响应
    // res.render('模板文件名','数据')
    //声明变量
    let title = '尚硅谷 - 让天下没有难学的技术'
    res.render('home',{title})

    //创建模板文件

})

//监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已经启动，端口为3000监听中...')
})