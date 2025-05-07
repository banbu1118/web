//导入http模块
const http = require('http');

//创建服务对象
const server = http.createServer((request, response) => {
    //获取请求的方法
    // let method = request.method;
    //解构赋值写法
    let { method } = request;

    //获取请求的url
    let { pathname } = new URL(request.url, 'http://127.0.0.1')

    //为防止乱码，设置响应头
    response.setHeader('Content-Type', 'text/html;charset=utf-8')

    //判断
    if (method === 'GET' && pathname === '/login') {
        //登陆的情形
        response.end('登陆页面')
    } else if (method === 'GET' && pathname === '/reg') {
        //注册的情形
        response.end('注册页面')
    } else {
        //其他情况
        response.end('Not Found')
    }
})

//监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动，端口监听中...');

})