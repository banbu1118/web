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

    //删除多条
    // try {
    //     const result = await BookModel.deleteMany({ is_hot: false });
    //     console.log('删除结果:', result);
    // } catch (error) {
    //     console.log('删除失败:', error);
    // } finally {
    //     // 7. 操作完成后关闭数据库连接
    //     mongoose.disconnect();
    // }

    // 设置字段
    // try {
    //     const data = await BookModel.find().select({ name: 1, author: 1, _id: 0 }).exec();
    //     console.log('查询结果:', data);
    // } catch (error) {
    //     console.log('查询失败:', error);
    // } finally {
    //     //8. 操作完成后关闭数据库连接
    //     mongoose.disconnect();
    // }

    //按照价格是升序排列
    // try {
    //     const data = await BookModel.find().select({ name: 1, price: 1, _id: 0 }).sort({ price: 1 }).exec();
    //     console.log('查询结果:', data);
    // } catch (error) {
    //     console.log('查询失败:', error);
    // } finally {
    //     //8. 操作完成后关闭数据库连接
    //     mongoose.disconnect();
    // }

    //数据截断
    // try {
    //     const data = await BookModel.find().select({ name: 1, price: 1, _id: 0 }).sort({price: -1}).limit(3).exec();
    //     console.log('查询结果:', data);
    // } catch (error) {
    //     console.log('查询失败:', error);
    // } finally {
    //     // 8. 操作完成后关闭数据库连接
    //     mongoose.disconnect();
    // }

    try {
        const data = await BookModel.find().select({ name: 1, price: 1, _id: 0 }).sort({price: -1}).limit(3).skip(3).exec();
        console.log('查询结果:', data);
    } catch (error) {
        console.log('查询失败:', error);
    } finally {
        // 8. 操作完成后关闭数据库连接
        mongoose.disconnect();
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
