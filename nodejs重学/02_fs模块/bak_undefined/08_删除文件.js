//导入fs模块
const fs = require('fs')

//调用unlink方法，还有unlinksync方法
// fs.unlink('./观书有感.txt', err => {
//     if (err) {
//         console.log('删除失败~');
//         return
//     }
//     console.log('删除成功~');
// })

//调用rm方法，还有rmsync方法
fs.rm('./data.txt', err => {
    if (err) {
        console.log('删除失败~');
        return;
    }
    console.log('删除成功~');
})