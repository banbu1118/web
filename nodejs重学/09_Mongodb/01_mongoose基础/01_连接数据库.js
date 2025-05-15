//安装mongoose

//导入mongoose模块
const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

//设置回调

//设置连接成功的回调
mongoose.connection.once('open', () => {
    console.log('连接成功');

})

//设置连接失败的回调
mongoose.connection.once('error', () => {
    console.log('连接失败');

})

//设置连接关闭的回调
mongoose.connection.once('close', () => {
    console.log('连接关闭');
})

//关闭mongodb的连接
// setTimeout(() => {
//     mongoose.disconnect();
// }, 2000);