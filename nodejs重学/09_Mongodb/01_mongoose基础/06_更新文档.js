//1. 安装 mongoose
//2. 导入 mongoose
const mongoose = require('mongoose');

//设置 strictQuery 为 true
mongoose.set('strictQuery', true);

//3. 连接 mongodb 服务                        数据库的名称
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

//4. 设置回调
// 设置连接成功的回调  once 一次   事件回调函数只执行一次
mongoose.connection.once('open', async () => {
    console.log('数据库连接成功');

    //5. 创建文档的结构对象
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number,
        is_hot: Boolean
    });

    //6. 创建模型对象  对文档操作的封装对象
    let BookModel = mongoose.model('novel', BookSchema);

    //更新文档
    //更新1条
    // try {
    //     const result = await BookModel.updateOne({ name: '红楼梦' }, { price: 9.9 });
    //     console.log('更新成功', result);
    // } catch (err) {
    //     console.log('更新失败', err);
    // } finally {
    //     mongoose.connection.close();
    // }

    //更新多条
    try {
        const result = await BookModel.updateMany({ author: '余华' }, { $set: { is_hot: false } });
        console.log('更新成功', result);
    } catch (err) {
        console.log('更新失败', err);
    } finally {
        mongoose.connection.close();
    }

});

// 设置连接失败的回调
mongoose.connection.on('error', (err) => {
    console.log('连接失败:', err);
});

// 设置连接关闭的回调
mongoose.connection.on('close', () => {
    console.log('连接关闭');
});
