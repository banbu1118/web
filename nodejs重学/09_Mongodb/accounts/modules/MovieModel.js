//导入mongoose模块
const mongoose = require('mongoose');

// 创建文档的结构对象
const MovieSchema = new mongoose.Schema({
    title: String,
    director: String
})

// 创建模型对象
const MovieModel = mongoose.model('Movie', MovieSchema)

// 导出模型对象
module.exports = MovieModel