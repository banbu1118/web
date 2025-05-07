/* 
    需求：
        复制资料目录下的笑看风云.mp4文件
*/
//引入fs模块
const fs = require('fs');
const process = require('process');

//方式一 readfile
//读取文件内容
// let data = fs.readFileSync('./资料/笑看风云.mp4');

// //写入文件
// fs.writeFileSync('./资料/笑看风云-2.mp4', data);
// console.log(process.memoryUsage());



//方式二 流式操作 createReadStream
//创建读取流对象
const rs = fs.createReadStream('./资料/笑看风云.mp4')

//创建写入流对象
const ws = fs.createWriteStream('./资料/笑看风云-3.mp4')

//绑定事件
// rs.on('data', chunk => {
//     ws.write(chunk)
// })

// rs.on('end', () => {
//     console.log(process.memoryUsage());
// })

//使用pipe管道流来复制文件
rs.pipe(ws)