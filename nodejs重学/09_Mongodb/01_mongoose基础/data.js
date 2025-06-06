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

  //7. 使用 async/await 新增数据
  try {
    const data = await BookModel.insertMany([
      { name: '西游记', author: '吴承恩', price: 19.9, is_hot: true },
      { name: '红楼梦', author: '曹雪芹', price: 29.9, is_hot: true },
      { name: '三国演义', author: '罗贯中', price: 25.9, is_hot: true },
      { name: '水浒传', author: '施耐庵', price: 20.9, is_hot: true },
      { name: '活着', author: '余华', price: 19.9, is_hot: true },
      { name: '狂飙', author: '徐纪周', price: 68, is_hot: true },
      { name: '大魏能臣', author: '黑男爵', price: 9.9, is_hot: false },
      { name: '知北游', author: '洛水', price: 59, is_hot: false },
      { name: '道君', author: '跃千愁', price: 59, is_hot: false },
      { name: '七煞碑', author: '游泳的猫', price: 29, is_hot: false },
      { name: '独游', author: '酒精过敏', price: 15, is_hot: false },
      { name: '大泼猴', author: '甲鱼不是龟', price: 26, is_hot: false },
      { name: '黑暗王者', author: '古羲', price: 39, is_hot: false },
      { name: '不二大道', author: '文刀手予', price: 89, is_hot: false },
      { name: '大泼猴', author: '甲鱼不是龟', price: 59, is_hot: false },
      { name: '长安的荔枝', author: '马伯庸', price: 45, is_hot: true },
      { name: '命运', author: '蔡崇达', price: 59.8, is_hot: true },
      { name: '如雪如山', author: '张天翼', price: 58, is_hot: true },
      { name: '三体', author: '刘慈欣', price: 23, is_hot: true },
      { name: '秋园', author: '杨本芬', price: 38, is_hot: true },
      { name: '百年孤独', author: '范晔', price: 39.5, is_hot: true },
      { name: '在细雨中呼喊', author: '余华', price: 25, is_hot: true },
    ]);
    console.log('数据插入成功:', data);
  } catch (error) {
    console.log('数据插入失败:', error);
  } finally {
    //8. 关闭数据库连接
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
