//导入db
const db = require('./db/db');

//导入mongoose
const mongoose = require('mongoose');

//导入BookModule
const BookModule = require('./modules/BookModule');

//调用db
db(async () => {
    // 使用 async/await 新增数据
    try {
        const data = await BookModel.create({ name: '西游记', author: '吴承恩', price: 19.9 });
        console.log('插入成功:', data);
    } catch (err) {
        console.log('插入失败:', err);
    } finally {
        // 操作完成后关闭数据库连接（推荐）
        mongoose.connection.close();    //关闭当前连接实例
        // mongoose.disconnect();    //关闭所有连接实例Z
    }
}, () => {
    console.log('数据库连接失败');
})

