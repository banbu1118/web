//导入fs模块
const fs = require('fs');

//相对路径
// fs.writeFileSync('./index.html','love')
// fs.writeFileSync('index.html','love')
// fs.writeFileSync('../index.html','love')

//绝对路径
// fs.writeFileSync('D:/coder/nodejs重学/02_fs模块/index.html','love')
// fs.writeFileSync('D:/index.html','love')

//不能直接在c盘创建文件，权限不够
// fs.writeFileSync('C:/index.html','love')

//这样写也可以，默认当前磁盘的根目录，windows和Linux都行
// fs.writeFileSync('/index.html','love')
