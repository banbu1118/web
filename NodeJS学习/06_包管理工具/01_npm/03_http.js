//导入http模块
const http = require('http');

//创建服务对象
const server = http.createServer((requet, response) => {
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    response.end('你好啊!')
})

//监听端口
server.listen(9000, () => {
    console.log('服务已经启动...');
    
})