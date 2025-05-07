//引入fs模块
const fs = require('fs');

//创建读取流对象
const rs = fs.createReadStream('./资料/笑看风云.mp4')

//绑定data事件
rs.on('data', chunk => {
    console.log(chunk.length);
})

//绑定end事件，可选
rs.on('end',()=>{
    console.log('文件读取完毕');
    
})