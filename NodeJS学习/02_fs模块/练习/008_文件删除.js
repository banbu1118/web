//1.引入fs模块
const fs = require('fs')

//2.调用unlink方法 对应的同步方法是unlinkSync方法
// fs.unlink('./观书有感.txt', error => {
//     if (error) {
//         console.log('删除失败')
//         return
//     }
//     console.log('删除成功');
// })

//调用rm方法删除，对应的同步方法是rmSync方法
fs.rm('./论语.txt', error => {
    if (error) {
        console.log('删除失败')
        return
    }
    console.log('删除成功')
})