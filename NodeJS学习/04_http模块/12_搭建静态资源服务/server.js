/* 
    创建一个http服务，端口为9000，满足以下要求
    get /index.html 响应 page/index.html的内容
    get /css/app.css 响应 page/css/app.css的内容
    get /images/logo.png 响应 page/images/logo.png的内容
*/
//导入http模块，fs模块
const http = require('http');
const fs = require('fs');
const path = require('path');
const { log } = require('console');

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

//创建服务对象
const server = http.createServer((request, response) => {
    //获取请求url的路径
    let { pathname } = new URL(request.url, 'http://127.0.0.1')

    //声明一个变量，指向静态资源的根目录
    let root = __dirname + '/page'

    //拼接文件路径
    let filePath = root + pathname

    //读取文件
    fs.readFile(filePath, (err, data) => {
        //判断请求方法
        if (request.method !== 'GET') {
            response.statusCode = 405;
            response.end('<h1>405 Method Not Allowed</h1>');
            return
        }

        if (err) {
            console.log(err);

            //设置字符集
            response.setHeader('Content-Type', 'text/html;charset=utf-8')

            //判断错误类型
            switch (err.code) {
                case 'ENOENT':
                    response.statusCode = 404;
                    response.end('<h1>404 Not Found</h1>');
                case 'EPERM':
                    response.statusCode = 403;
                    response.end('<h1>403 Forbidden</h1>');
                default:
                    response.statusCode = 500;
                    response.end('<h1>500 Internal Server Error</h1>');
            }
            return;
        }

        //获取文件后缀名
        let ext = path.extname(filePath).slice(1)

        //获取对应的类型
        let type = mimes[ext]

        if (type) {
            //匹配到了
            if (ext === 'html') {
                response.setHeader('Content-Type', type + ';charset=utf-8')
            }
            else {
                response.setHeader('Content-Type', type)
            }
        } else {
            //未匹配到，默认返回二进制流
            response.setHeader('Content-Type', 'application/octet-stream')
        }


        //响应文件内容
        response.end(data)
    })

})

//监听端口，启动服务
server.listen(9000, () => {
    console.log("服务已经启动");

})