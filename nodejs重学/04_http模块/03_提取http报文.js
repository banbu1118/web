//导入http模块
const http = require('http');

//创建服务对象,request和response分别代表请求和响应对象，都是形参
const server = http.createServer((request, response) => {
    //获取请求的方法
    console.log(request.method);

    //获取请求的url
    console.log(request.url);   //只包含url中的路径和查询字符串

    //获取http协议的版本号
    console.log(request.httpVersion);

    //获取请求头信息
    console.log(request.headers);

    //获取请求的主体体host信息
    console.log(request.headers.host);

    response.end('hello http');
})

//监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动...');

})
