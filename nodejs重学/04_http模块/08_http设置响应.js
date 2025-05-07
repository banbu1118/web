//导入http模块
const http = require('http');

//创建服务对象
const server = http.createServer((request, response) => {
    //设置响应状态码
    // response.statusCode = 203
    // response.statusCode = 404

    //响应状态的描述
    // response.statusMessage = 'i love you'

    //设置响应头
    // response.setHeader('Content-Type', 'text/html;charset=utf-8')
    // response.setHeader('Server', 'node.js')
    // response.setHeader('MyHeader', 'MyValue')

    //设置多个响应头
    // response.setHeader('test',['a','b','c'])

    //设置响应体
    //一般使用了write设置响应体，最后的end内容设置为空
    response.write('love')
    response.write('love')
    response.write('love')
    response.write('love')
    response.write('love')

    response.end('')
})

//监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动，端口监听中...');

})