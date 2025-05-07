//导入http模块
const http = require('http');

//导入url模块
const url = require('url');

//创建服务对象,request和response分别代表请求和响应对象，都是形参
const server = http.createServer((request, response) => {
    //解析request.url
    // console.log(request.url);

    let res = url.parse(request.url, true)

    //路径
    let pathname = res.pathname;

    //查询字符串
    let keyword = res.query.keyword

    console.log(keyword);

    response.end('url');
})

//监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动...');

})
