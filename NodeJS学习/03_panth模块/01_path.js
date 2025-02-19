//导入fs模块
const fs = require('fs')
const path = require('path')

//写入文件
// fs.writeFileSync(__dirname + '/index.html', 'love')
// console.log(__dirname + '/index.html');

//resole解决
// console.log(path.resolve(__dirname, './index.html'));
// console.log(path.resolve(__dirname, 'index.html')); //省略./也行

//sep 分隔符
// console.log(path.sep);  //windows中是\   linux中是/

//parse 方法 文件的绝对路径和文件名，返回一个对象
// console.log(__filename);
let str = 'D:\\coder\\NodeJS学习\\03_panth模块\\01_path.js'  //增加一个\转义

// console.log(path.parse(str));

//basename 获取文件名
// console.log(path.basename(str));

//dirname 获取目录名
// console.log(path.dirname(str));

//extname 获取文件扩展名
console.log(path.extname(str));







