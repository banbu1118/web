//1. 引入fs模块
const fs = require('fs');

//2. 相对路径参照物：命令行的工作目录
// fs.writeFileSync('./index.html','love')

//绝对路径
//__dirname是当前文件的绝对路径
// console.log(__dirname);
fs.writeFileSync(__dirname + '/index.html','love')
