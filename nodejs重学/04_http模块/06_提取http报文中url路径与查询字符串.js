//导入http模块
const http = require('http');

//创建服务对象,request和response分别代表请求和响应对象，都是形参
const server = http.createServer((request, response) => {
    //实例化url对象
    // let url = new URL('/search?a=100&b=200','http://localhost:9000')
    let url = new URL(request.url,'http://127.0.0.1')

    //输出路径
    console.log(url.pathname);

    //输出查询字符串
    console.log(url.searchParams.get('keyword'));
    
    // console.log(url);
    
    response.end('url new');
})

//监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动...');

})
