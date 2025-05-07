//导入http模块
const http = require('http');

//导入fs模块
const fs = require('fs');

//创建服务对象,request和response分别代表请求和响应对象，都是形参
const server = http.createServer((request, response) => {
    //读取文件内容
    let html = fs.readFileSync(__dirname + '/table.html')

    response.end(html);
})

//监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动...');

})
