//导入mongoose模块
const mongoose = require('mongoose');

// 创建文档的结构对象
const BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number
});

// 创建模型对象，对文档操作的封装对象
const BookModel = mongoose.model('books', BookSchema);

//暴露模型对象
module.exports = BookModel;