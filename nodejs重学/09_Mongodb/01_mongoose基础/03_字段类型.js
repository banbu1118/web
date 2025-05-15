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
        name: String,
        author: String,
        price: Number,
        is_hot: Boolean,
        tags: Array,
        pub_time: Date,
        test: mongoose.Schema.Types.Mixed,
        kk: mongoose.Schema.Types.ObjectId
    });

    // 创建模型对象，对文档操作的封装对象
    const BookModel = mongoose.model('books', BookSchema);

    // 使用 async/await 新增数据
    try {
        const data = await BookModel.create({
            name: '西游记',
            author: '吴承恩',
            price: 19.9,
            is_hot: true,
            tags: ['鬼怪', '励志', '社会'],
            pub_time: new Date(),
            test: 'abc',
            kk: new mongoose.Types.ObjectId()
        });
        console.log('插入成功:', data);
    } catch (err) {
        console.log('插入失败:', err);
    } finally {
        // 操作完成后关闭数据库连接（推荐）
        mongoose.connection.close();
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