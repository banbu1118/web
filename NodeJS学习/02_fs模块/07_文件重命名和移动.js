//1.引入fs模块
const fs = require('fs')

//2.调用rename方法重命名文件
// fs.rename('./座右铭.txt', './论语.txt', error => {
//     if (error) {
//         console.log('操作失败');
//         return
//     }
//     console.log('操作成功');
// })

//调用rename方法移动文件
fs.rename('./data.txt', './资料/data.txt', error => {
    if (error) {
        console.log('操作失败');
        return;
    }
    console.log('操作成功');
})