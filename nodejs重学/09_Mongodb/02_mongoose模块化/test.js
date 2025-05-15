//导入db
const db = require('./db/db');

//导入mongoose
const mongoose = require('mongoose');

//导入MoiveModel
const MovieModel = require('./modules/MovieModel');

//调用函数
db(async () => {
    try {
        const data = await MovieModel.create({
            title: '复仇者联盟',
            director: '克里斯托弗·库布里克',
        });
        console.log('插入成功:', data);
    } catch (err) {
        console.log('插入失败:', err);
    } finally {
        // 操作完成后关闭数据库连接
        mongoose.disconnect();
    }
});