//导入fs模块
const { error } = require('console');
const fs = require('fs');

// //调用rename方法
// fs.rename('./座右铭.txt', './论语.txt', err => {
//     if (err) {
//         console.log('文件重命名失败');
//         return
//     }
//     console.log('文件重命名成功');
// })

//文件的移动
fs.rename('./论语.txt', './资料/data.txt', error => {
    if (error) {
        console.log('文件移动失败');
        return;
    }
    console.log('文件移动成功');
})