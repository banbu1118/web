//导入mongoose模块
const mongoose = require('mongoose');

// 创建文档的结构对象
const AccountSchema = new mongoose.Schema({
    //标题
    title: { type: String, required: true },
    //时间
    time: Date,
    //类型
    type: {
        type: Number,
        default: -1
    },
    //金额
    account: {
        type: Number,
        required: true
    },
    //备注
    remark: {
        type: String,
    }
});

// 创建模型对象，对文档操作的封装对象
const AccountModel = mongoose.model('accounts', AccountSchema);

//暴露模型对象
module.exports = AccountModel;