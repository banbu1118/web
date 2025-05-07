//导入fs模块
const fs = require('fs')

//导入path模块
const path = require('path')

//写入文件
// fs.writeFileSync(__dirname + '/index.html', 'love')
// console.log(__dirname + '/index.html');     //输出 D:\coder\nodejs重学\02_fs模块/index.html ，正反斜杆不规范

//resove 解决
// console.log(path.resolve(__dirname, 'index.html'));     //输出 D:\coder\nodejs重学\02_fs模块\index.html ，正确输出

//sep 路径分隔符
// console.log(path.sep);      //windows 下为 \ ，linux 下为 /

//parse方法 __filename 指向当前文件的绝对路径
// console.log(__filename);
let str = 'D:\\coder\\odejs重学\\02_fs模块\\14_path.js'

// console.log(path.parse(str));

//basename 去掉路径，返回文件名
// console.log(path.basename(str));

//dirname 去掉文件名，返回路径
// console.log(path.dirname(str));

//extname 去掉文件名，返回扩展名
console.log(path.extname(str));





