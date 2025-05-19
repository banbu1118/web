/* 
    success: 连接成功的回调函数
    error: 连接失败的回调函数
*/

module.exports = function (success, error) {
    if (typeof error !== 'function') {
        error = function () {
            console.log('连接失败');
        }
    }

    //安装mongoose

    //导入mongoose模块
    const mongoose = require('mongoose');

    //导入配置文件
    const { DBHOST, DBPORT, DBNAME } = require('../config/config.js');

    //连接数据库
    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`)

    //设置回调

    // 设置连接成功的回调（推荐 async/await）
    mongoose.connection.once('open', async () => {
        success();
    });


    //设置连接失败的回调
    mongoose.connection.once('error', () => {
        error();

    })

    //设置连接关闭的回调
    mongoose.connection.once('close', () => {
        console.log('连接关闭');
    })
}