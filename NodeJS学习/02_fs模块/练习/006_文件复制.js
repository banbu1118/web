/* 
    需求：
        复制资料目录下的笑看风云.mp4
*/
//1.引入fs模块
const fs = require('fs')
//导入process模块
const process = require('process')

//方式一
//2.读取文件内容
// let data=fs.readFileSync('./资料/笑看风云.mp4')

// //3.写入文件
// fs.writeFileSync('./资料/笑看风云副本.mp4',data)

//查看内存使用情况
// console.log(process.memoryUsage());  //rss 110772224字节 => 105MB


//方式二
//2.创建读取流对象
const rs = fs.createReadStream('./资料/笑看风云.mp4')

//3.创建写入流对象
const ws = fs.createWriteStream('./资料/笑看风云副本-2.mp4')

//4.绑定data事件
// rs.on('data', chunk => {
//     ws.write(chunk)
// })

// rs.on('end', () => {
//     console.log(process.memoryUsage());  //rss 51982336字节 => 49MB
// })

//使用pipe管道方法
rs.pipe(ws)