//安装mongoose

//导入mongoose模块
const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

//设置回调

// 设置连接成功的回调（推荐 async/await）
mongoose.connection.once('open', async () => {
    console.log('数据库连接成功');

    // 创建文档的结构对象
    const BookSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            unique: true
        },
        author: {
            type: String,
            default: '匿名'
        },
        //类型
        style: {
            type: String,
            enum: ['言情', '城市', '志怪', '恐怖']
        },
        price: Number
    });

    // 创建模型对象，对文档操作的封装对象
    const BookModel = mongoose.model('books', BookSchema);

    // 使用 async/await 新增数据
    try {
        const data = await BookModel.create({
            name: '西游记',
            author: '吴承恩',
            style: '志怪',
            price: 19.9
        });
        console.log('插入成功:', data);
    } catch (err) {
        console.log('插入失败:', err);
    } finally {
        // 操作完成后关闭数据库连接（推荐）
        mongoose.connection.close();    //关闭当前连接实例
        // mongoose.disconnect();    //关闭所有连接实例
    }
});


//设置连接失败的回调
mongoose.connection.once('error', () => {
    console.log('连接失败');

})

//设置连接关闭的回调
mongoose.connection.once('close', () => {
    console.log('连接关闭');
})