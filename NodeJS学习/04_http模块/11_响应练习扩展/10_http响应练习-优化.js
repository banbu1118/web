//导入http模块
const http = require('http')
//导入fs模块
const fs = require('fs')

//创建服务对象
const server = http.createServer((request, response) => {
    //获取请求url的路径
    let { pathname } = new URL(request.url,'http://127.0.0.1')

    //判断请求路径
    if (pathname === '/') {
        //如果请求路径为/，则返回index.html文件内容
        let html = fs.readFileSync(__dirname + '/10_table.html')
        response.end(html)
    } else if (pathname === '/index.css') {
        //如果请求路径为/index.cs，则返回index.css文件内容
        let css = fs.readFileSync(__dirname + '/index.css')
        response.end(css)
    } else if (pathname === '/index.js') {
        //如果请求路径为/index.js，则返回index.js文件内容
        let js = fs.readFileSync(__dirname + '/index.js')
        response.end(js)
    } else {
        response.statusCode = 404
        response.end('404 Not Found')
    }
})

//监听端口，启动服务
server.listen(9000, () => {
    console.log("服务已经启动");

})