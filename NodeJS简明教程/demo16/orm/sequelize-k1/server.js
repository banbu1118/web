import { Sequelize, DataTypes } from 'sequelize';

// 1. 从环境变量中读取数据库配置
//    这样就不会把账号密码写死在代码里，更安全
const databaseConfig = {
    username: process.env.DB_USER,       // 数据库用户名
    password: process.env.DB_PASSWORD,   // 数据库密码
    host: process.env.DB_HOST,           // 数据库主机地址
    port: Number(process.env.DB_PORT),   // 数据库端口号
    database: process.env.DB_NAME        // 数据库名称
}

// 打印出当前的数据库配置，方便调试
// console.log(databaseConfig);

// 2. 创建 Sequelize 实例，用于连接数据库
const sequelize = new Sequelize(
    databaseConfig.database,  // 数据库名称
    databaseConfig.username,  // 用户名
    databaseConfig.password,  // 密码
    {
        host: databaseConfig.host,   // 主机
        dialect: 'postgres',         // 指定数据库类型，这里用 PostgreSQL
        port: databaseConfig.port    // 端口
    }
);

// 3. 测试数据库连接是否成功
try {
    await sequelize.authenticate();  
    console.log('Connection has been established successfully.'); // 连接成功
} catch (error) {
    console.error('Unable to connect to the database:', error);    // 连接失败
}

// 4. 定义 Todo 模型，对应数据库中的 todo 表
const Todo = sequelize.define(
    'Todo',   // 模型名称（逻辑层用），Sequelize 默认会转为复数作为表名，但我们会显式指定表名
    {
        id: {
            type: DataTypes.INTEGER,   // 字段类型：整数
            primaryKey: true,          // 主键
            allowNull: false,          // 不允许为空
        },
        title: {
            type: DataTypes.STRING,    // 标题字段，字符串类型
        },
        content: {
            type: DataTypes.STRING,    // 内容字段
        },
        tag: {
            type: DataTypes.STRING,    // 标签字段
        },
    },
    {
        tableName: 'todo',      // 显式指定表名，避免 Sequelize 默认复数化
        createdAt: false,       // 不要 createdAt 自动时间戳
        updatedAt: false,       // 不要 updatedAt 自动时间戳
    }
);

// 5. 查询 todo 表的所有数据
const todos = await Todo.findAll();

// 6. 以 JSON 格式打印查询结果，方便查看
console.log(JSON.stringify(todos, null, 2));
