// 导入 Node.js 内置 http 模块，用于创建 HTTP 服务器
import { createServer } from 'node:http';
// 导入 Node.js 内置 fs/promises 模块，用于以 Promise 方式读取文件
import { readFile } from 'node:fs/promises';

// 创建 HTTP 服务器，接收请求对象 req 和响应对象 res
// 这里回调函数用 async，是因为我们要用 await 读取文件
const server = createServer(async (req, res) => {

    // ---------------------------
    // 当访问根路径 "/" 时，返回 HTML 文件
    // ---------------------------
    if (req.url === '/') {
        // 设置响应头，200 表示请求成功，Content-Type 为 text/html
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // 读取当前目录下的 index.html 文件，编码为 utf-8
        const htmlFile = await readFile('./index.html', "utf-8");

        // 把读取到的 HTML 内容返回给客户端
        res.end(htmlFile);
    }

    // ---------------------------
    // 当访问 "/data" 路径时，返回 JSON 文件
    // ---------------------------
    if (req.url === '/data') {
        // 设置响应头，Content-Type 为 application/json，表示返回 JSON 数据
        res.writeHead(200, { 'Content-Type': 'application/json' });

        // 读取当前目录下的 data.json 文件，编码为 utf-8
        const jsonData = await readFile('./data.json', "utf-8");

        // 把 JSON 数据返回给客户端
        res.end(jsonData);
    }
});

// 启动服务器，监听 127.0.0.1 的 3000 端口
// 回调函数会在服务器启动成功后执行
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000'); // 控制台输出提示信息
});