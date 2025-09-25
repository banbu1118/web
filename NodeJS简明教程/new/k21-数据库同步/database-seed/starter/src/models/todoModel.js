import { DataTypes } from "sequelize";  // 引入 Sequelize 的数据类型
import sequelize from "../utils/dbHelper.js"; // 引入已经配置好的 Sequelize 实例（数据库连接）

// 1. 定义 Todo 模型，对应数据库中的 todo 表
const Todo = sequelize.define(
    'Todo', // 模型名称（逻辑层使用），Sequelize 默认会把它复数化作为表名，但我们在下面显式指定表名
    {
        // 2. 定义字段及其属性
        id: {
            type: DataTypes.BIGINT,   // 字段类型为大整数，适合存储长 ID
            allowNull: false,         // 不允许为空
            primaryKey: true,         // 主键
        },
        title: {
            type: DataTypes.TEXT,     // 标题字段，文本类型
            allowNull: false,         // 必填
        },
        tag: {
            type: DataTypes.TEXT,     // 标签字段，文本类型
            allowNull: false,         // 必填
        },
        content: {
            type: DataTypes.TEXT,     // 内容字段，文本类型
            allowNull: false,         // 必填
        },
    },
    {
        // 3. 模型配置项
        tableName: 'todo',       // 显式指定数据库表名为 todo，避免 Sequelize 默认复数化
        createdAt: false,        // 禁用 Sequelize 自动生成 createdAt 字段
        updatedAt: false,        // 禁用 Sequelize 自动生成 updatedAt 字段
    },
);

// 4. 导出 Todo 模型，在其他模块中可以直接 import 使用
export default Todo;