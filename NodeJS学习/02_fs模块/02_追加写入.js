//01. 引入fs模块
const { error } = require('console');
const fs = require('fs');

//02.调用appendFile方法，追加写入文件
// fs.appendFile('./座右铭.txt', '，则其善者而从之，其恶者而改之。', error => {
//     //判断
//     if (error) {
//         console.log('追加写入失败');
//         return
//     }
//     console.log('追加写入成功');
// })


// \r\n 换行符
// fs.appendFileSync('./座右铭.txt', '\r\n温故而知新，可以为师矣。');

//writeFile 实现追加写入
fs.writeFile('./座右铭.txt', 'lobve love love', { flag: 'a' }, error => {
    if (error) {
        console.log('写入失败');
        return
    }
    console.log('写入成功');
})