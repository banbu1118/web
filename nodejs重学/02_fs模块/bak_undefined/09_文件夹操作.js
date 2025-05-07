//导入fs模块
const fs = require('fs')

//创建文件夹
// fs.mkdir('./html', err => {
//     if (err) {
//         console.log('创建失败')
//         return
//     }
//     console.log('创建成功')
// })

//递归创建，recursive: true 表示允许创建递归解构目录
// fs.mkdir('./a/b/c', { recursive: true }, err => {
//     if (err) {
//         console.log('创建失败')
//         return
//     }
//     console.log('创建成功')
// })

//读取文件夹，err 是可能发生的错误对象，data 是是读取成功后返回的文件和文件夹名数组
// fs.readdir('./资料', (err, data) => {
//     if (err) {
//         console.log('读取失败')
//         return
//     }
//     console.log(data)
// })

//删除文件夹
// fs.rmdir('./html', err => {
//     if (err) {
//         console.log('删除失败')
//         return
//     }
//     console.log('删除成功')
// })

//递归删除（不推荐使用这个方法）
// fs.rmdir('./a', { recursive: true }, err => {
//     if (err) {
//         console.log('删除失败')
//         return
//     }
//     console.log('删除成功')
// })

//递归删除（推荐使用）
fs.rm('./a', { recursive: true }, err => {
    if (err) {
        console.log('删除失败')
        return
    }
    console.log('删除成功')
})