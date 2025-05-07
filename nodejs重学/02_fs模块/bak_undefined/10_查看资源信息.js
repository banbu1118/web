//导入fs模块
const fs = require('fs')

//stat方法
fs.stat('./资料/笑看风云.mp4', (err, data) => {
    if (err) {
        console.log('操作失败');
        return
    }
    // console.log(data);

    //获取文件类型
    //是否是文件
    // console.log(data.isFile());
    //是否是目录
    console.log(data.isDirectory());
})