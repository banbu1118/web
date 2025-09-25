import { readFile } from 'node:fs/promises'; // 引入 Node.js 文件系统模块的 Promise 版本，用于读取文件
import sequelize from '../utils/dbHelper.js'; // 导入 Sequelize 实例（数据库连接）
import Todo from '../models/todoModel.js';    // 导入 Todo 模型（对应数据库表）

try {
    // 1. 读取初始化数据 JSON 文件（initData.json）
    //    注意路径相对于当前执行文件
    const initializeTodoString = await readFile("./src/scripts/data/initData.json","utf-8");

    // 2. 将 JSON 字符串解析成 JS 对象/数组
    const initializeTodos = JSON.parse(initializeTodoString);

    // 3. 测试数据库连接是否成功
    await sequelize.authenticate();

    // 4. 同步模型到数据库
    //    { force: true } 表示如果表存在先删除再创建，用于清空旧数据
    await Todo.sync({ force: true });

    // 5. 批量插入初始化数据
    const result = await Todo.bulkCreate(initializeTodos);

    // 6. 打印插入结果，以 JSON 格式美化输出
    console.log(JSON.stringify(result, null, 2));

} catch (error) {
    // 7. 捕获异常并打印错误信息
    console.log(error);
} finally {
    // 8. 最终关闭数据库连接
    await sequelize.close();
}