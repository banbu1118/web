//导入http模块
const http = require('http');

//导入fs模块
const fs = require('fs');

//导入path模块
const path = require('path');

//声明一个变量
let mimes = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    json: 'application/json'
}

//创建服务对象,request和response分别代表请求和响应对象，都是形参
const server = http.createServer((request, response) => {
    //获取请求url路径
    let { pathname } = new URL(request.url, 'http://127.0.0.1')

    //声明一个变量
    let root = __dirname + '/page';

    //拼接文件路径
    let filePath = root + pathname;

    //读取文件
    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.setHeader('Content-Type', 'text/html;charset=utf-8')
            response.statusCode = 500
            response.end('文件读取失败')
            return
        }

        //获取文件后缀名
        let ext = path.extname(filePath).slice(1);

        //获取对应的类型
        let type = mimes[ext]

        if (type) {
            //匹配到了
            if (ext === 'html') {
                //如果是html文件，需要设置头部信息
                response.setHeader('Content-Type', type + ';charset=utf-8')
            } else {
                //其他文件，设置头部信息
                response.setHeader('Content-Type', type)
            }
        } else {
            //没有匹配到
            response.setHeader('Content-Type', 'application/octet-stream')
        }

        //响应文件内容
        response.end(data)
    })
})

//监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动...');

})
