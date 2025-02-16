//1.引入fs模块
const { error } = require('console');
const fs = require('fs');

//2.异步读取
// fs.readFile('./观书有感.txt', (error, data) => {
//     if (error) {
//         console.log('读取文件失败');
//         return

//     }
//     console.log(data.toString());

// })

//3.同步读取
let data = fs.readFileSync('./观书有感.txt');
console.log(data.toString());