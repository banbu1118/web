//导入http模块
const http = require('http');

//创建服务对象,request和response分别代表请求和响应对象，都是形参
const server = http.createServer((request, response) => {
    //声明一个变量
    let body = '';

    //绑定事件
    request.on('data', chunk => {
        body += chunk;
    })

    //绑定end事件
    request.on('end', () => {
        console.log(body);

        //响应
        response.end('Hello HTTP')

    })

    response.end('http');
})

//监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动...');

})
