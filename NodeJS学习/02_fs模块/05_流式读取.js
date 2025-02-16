//1.引入fs模块
const fs = require('fs')

//2.创建读取流对象
const rs = fs.createReadStream('./资料/笑看风云.mp4')

//3.绑定data事件 chunk块儿数据
rs.on('data', chunk => {
    console.log(chunk.length); //65536字节 => 64KB

})

//4.end，可选事件
rs.on('end', () => {
    console.log('文件读取完毕')
})