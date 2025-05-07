//导入fs模块
const fs = require('fs')

//fs模块中的相对路径参照物：命令行的工作目录
// fs.writeFileSync('./index.html', 'love')

//绝对路径
//__dirname 当前正在执行的脚本文件所在的目录的绝对路径
// console.log(__dirname);
fs.writeFileSync(__dirname + '/index.html', 'love')