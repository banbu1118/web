//1.导入http模块
const http = require('http')

//2.创建服务对象
const server = http.createServer((request, response) => {
    // response.end("hello http server")  //设置响应体
    response.setHeader("Content-Type", "text/html;charset=utf-8")  //设置响应头
    response.end("你好")  //设置响应体
})

//3.监听端口，启动服务
server.listen(9000, () => {
    console.log("服务已经启动");

})