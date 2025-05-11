//导入express
const express = require('express')

//导入json文件
// const singers = require('./singers.json')
//使用解构赋值把内容赋值给singers变量，把对象转化为数组
const { singers } = require('./singers.json')

//创建应用对象
const app = express()

//创建路由
// :id 意味着这个位置可以匹配任何内容，这个内容称为路由参数
app.get('/singer/:id.html', (req, res) => {
    //获取路由参数
    // let id = req.params.id
    //解构赋值写法
    let { id } = req.params

    //在数组中寻找对应id的数据
    let result = singers.find(item => {
        if (item.id === Number(id)) {
            return true
        }
    })

    //判断
    if (!result) {
        res.statusCode = 404
        res.end(`<h1>404 Not Found</h1>`)
    }


    res.end(`
        <!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>${result.singer_name}</h2>
    <img src='${result.singer_pic}'>
</body>
</html>
        `)
})

//监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已经启动，端口为3000监听中...')
})