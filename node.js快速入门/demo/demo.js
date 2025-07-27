import http from 'http'

//本地回环地址是一个特殊的ip地址(通常为 127.0.0.1), 主要用于同一台主机的通信和测试
const hostname = '127.0.0.1' // 服务器监听的ip地址(本地回环地址), 意味着服务器只接受来自本机的网络请求
const port = 8008 //服务器监听的端口号

//http.createServer 创建一个 http 服务器实例
const server = http.createServer((request, response) => {
    // ------ url http://127.0.0.1:8008/?id=1&web=dengruicode.com
    let fullUrl = `http://${hostname}:${port}${request.url}` // 构造完整的 url 字符串
    let urlObj = new URL(fullUrl)
    //console.log(urlObj)

    const queryObj = new URLSearchParams(urlObj.search) //获取查询参数对象
    //console.log(queryObj)
    console.log("web:", queryObj.get('web'))

    // ------ request
    //request.method: http 请求的方法
    //request.url: 请求的 url
    console.log(`${request.method} ${request.url}`)

    //console.log(request.headers) //http 请求的头部信息
    console.log("referer:", request.headers.referer)
    console.log("user-agent:", request.headers['user-agent'])
    console.log("\n") //换行

    // ------ response
    response.statusCode = 200 //200 状态码表示请求成功
    //设置内容类型为 'text/html; charset=UTF-8' 的响应头
    response.setHeader('Content-Type', 'text/html; charset=UTF-8')

    //response.end("<h3>dengruicode.com</h3>") //发送响应数据并结束响应
    response.write("<h3>dengruicode.com</h3>")
    response.end()
})

//启动 http 服务器,并在指定的ip地址(127.0.0.1)和端口(8008)上监听连接请求
server.listen(port, hostname, () => {
    console.log(`服务器已启动: http://${hostname}:${port}`)
})
