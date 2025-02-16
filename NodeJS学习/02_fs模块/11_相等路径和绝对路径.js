//1.引入fs模块
const fs = require('fs')

//2.相对路径
// fs.writeFileSync('./index.html','love')
// fs.writeFileSync('index.html','love')

//3.绝对路径
// fs.writeFileSync('d:/index.html','love')
//linux系统下(windows也可以这样写，/代表根目录)
fs.writeFileSync('/index.html','love')