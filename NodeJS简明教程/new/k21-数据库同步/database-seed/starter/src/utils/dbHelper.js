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

export default sequelize;