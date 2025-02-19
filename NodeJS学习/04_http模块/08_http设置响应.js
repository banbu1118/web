//导入http模块
const http = require('http')

//创建服务对象
const server = http.createServer((request, response) => {
    //设置响应状态码
    // response.statusCode = 203
    // response.statusCode = 404

    //响应状态的描述信息
    // response.statusMessage = "kk"

    //响应头
    // response.setHeader("Content-Type", "text/plain;charset=utf-8")
    // response.setHeader("server", "node.js")
    // response.setHeader('my-header','kk')
    // response.setHeader("test",['a','b','c'])

    //响应体,可以设置多个write()
    response.write("love")
    response.write("love2")
    response.write("love3")

    //响应体,只能设置一次
    response.end("response")
})

//监听端口，启动服务
server.listen(9000, () => {
    console.log("服务已经启动");

})