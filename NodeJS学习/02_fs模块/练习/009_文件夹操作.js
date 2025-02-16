//1.引入fs模块
const { error } = require('console')
const fs = require('fs')

//2.创建文件夹
// fs.mkdir('./html', error => {
//     if (error) {
//         console.log('创建失败');
//         return
//     }
//     console.log('创建成功');
// })

//递归创建
//recursive: true 递归创建
// fs.mkdir('./a/b/c', { recursive: true }, error => {
//     if (error) {
//         console.log('创建失败');
//         return
//     }
//     console.log('创建成功');
// })

//读取文件夹
// fs.readdir('../02_fs模块', (error, data) => {
//     if (error) {
//         console.log('读取失败');
//         return
//     }
//     console.log(data);
// })

//删除文件夹
// fs.rmdir('./html', error => {
//     if (error) {
//         console.log('删除失败');
//         return
//     }
//     console.log('删除成功');
// })

//删除文件夹递归(不推荐这样删除，DeprecationWarning: In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed.)
// fs.rmdir('./a', { recursive: true }, error => {
//     if (error) {
//         console.log('删除失败');
//         return
//     }
//     console.log('删除成功');
// })

//建议使用
fs.rm('./a', { recursive: true }, error => {
    if (error) {
        console.log('删除失败');
        return
    }
    console.log('删除成功');
})