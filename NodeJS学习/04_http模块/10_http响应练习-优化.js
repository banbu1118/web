//导入http模块
const http = require('http')
//导入fs模块
const fs = require('fs')

//创建服务对象
const server = http.createServer((request, response) => {
    //读取文件的内容
    let html = fs.readFileSync(__dirname + '/10_table.html')
    response.end(html)
})

//监听端口，启动服务
server.listen(9000, () => {
    console.log("服务已经启动");

})