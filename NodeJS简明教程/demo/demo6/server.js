// 导入 express 框架
import express from 'express'

// 创建一个 Express 应用实例
const app = express()

// 定义服务器监听的端口号
const port = 3000

// 定义一个 GET 请求的路由
// 当用户访问根路径（'/'）时，服务器返回 "Hello World!" 文本
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 启动服务器，监听指定端口
// 当服务器成功启动后，在控制台输出提示信息
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
