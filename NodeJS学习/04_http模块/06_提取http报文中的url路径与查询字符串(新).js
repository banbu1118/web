//导入http模块
const http = require('http')

//创建服务对象
const server = http.createServer((request, response) => {
    //实例化url的对象
    // let url = new URL('/search?wd=node','http://localhost:9000')
    let url = new URL(request.url, 'http://localhost:9000')
    //输出路径
    console.log(url.pathname);
    //输出查询字符串
    console.log(url.searchParams.get("keyword"));
    


    response.end('url new')
})

//监听端口，启动服务
server.listen(9000, () => {
    console.log("服务已经启动");

})