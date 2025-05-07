//导入http模块
const http = require('http');

//创建服务对象,request和response分别代表请求和响应对象，都是形参
const server = http.createServer((request, response) => {
    //设置响应体
    response.setHeader('content-type', 'text/html;charset=utf-8')

    response.end('你好啊，nodemon');
})

//监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动...');

})
