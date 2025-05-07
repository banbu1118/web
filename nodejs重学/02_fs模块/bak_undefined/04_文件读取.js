//导入fs模块
const fs = require('fs');

//异步读取文件
// fs.readFile('./观书有感.txt', (err, data) => {
//     if (err) {
//         console.log("读取文件失败");
//         return;
//     }
//     console.log(data.toString());

// })

//同步读取文件
let data = fs.readFileSync('./观书有感.txt');
console.log(data.toString());