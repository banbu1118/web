//导入http模块
const http = require('http')

//创建http服务对象
const server = http.createServer((request, response) => {
    //获取请求的方法
    // let method = request.method
    //使用解构赋值获取请求的方法
    let { method } = request

    //获取请求的url
    // let pathname = new URL(request.url,'http://localhost:9000')
    //使用解构赋值获取请求的url
    let { pathname } = new URL(request.url, 'http://localhost:9000')

    //设置响应头
    response.setHeader('Content-Type', 'text/html;charset=utf-8')

    //判断
    if (method === 'GET' && pathname === '/login') {
        response.end("登陆页面")
    } else if (method === 'GET' && pathname === '/reg') {
        response.end("注册页面")
    } else {
        response.end("Not Found")
    }
})

//监听端口
server.listen(9000, () => {
    console.log('服务已经启动,端口号为9000,监听中...');

})