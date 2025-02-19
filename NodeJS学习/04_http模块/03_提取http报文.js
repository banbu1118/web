//1.导入http模块
const http = require('http')

//2.创建服务对象
const server = http.createServer((request, response) => {
    //获取请求的方法
    // console.log(request.method);

    //获取请求的url
    // console.log(request.url);  //只包含url中的路径和查询字符串，不包含协议、域名、端口

    //获取请求的http版本
    // console.log(request.httpVersion);

    //获取http请求头
    // console.log(request.headers);
    console.log(request.headers.host);

    response.end("http")  //设置响应体
})

//3.监听端口，启动服务
server.listen(9000, () => {
    console.log("服务已经启动");

})