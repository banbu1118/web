// 导入所需模块
import express from 'express';   // Express 框架，简化 HTTP 服务器开发
import cors from 'cors';         // 解决跨域请求问题
import { readFile, writeFile } from 'node:fs/promises'; // 用于异步读写文件

// 创建 Express 服务器实例
const server = express();
const port = 3000; // 服务器监听的端口

// 中间件配置
server.use(cors());              // 启用 CORS，允许跨域请求
server.use(express.json());      // 解析请求体中的 JSON 数据，方便处理 POST/PUT 请求的 JSON 内容

// -------------------- 获取所有产品 --------------------
server.get('/products', async (_req, res) => {
  // 读取 data.json 文件中的产品数据
  const productsData = await readFile('./data.json', 'utf-8');
  const products = JSON.parse(productsData); // 将 JSON 字符串解析为 JavaScript 对象

  // 返回产品列表，状态码 200 表示请求成功
  return res.status(200).json(products);
});

// -------------------- 添加新产品 --------------------
server.post('/products/add', async (req, res) => {
  // 读取当前产品数据
  const productsData = await readFile('./data.json', 'utf-8');
  const products = JSON.parse(productsData);

  // 从请求体中获取要添加的产品信息
  const addProduct = req.body;

  // 如果请求体为空，返回 400 错误（Bad Request）
  if (!addProduct) {
    return res.status(400).json({
      message: 'Bad request',
    });
  }

  // 将新产品添加到产品数组中
  const updatedProducts = [...products, addProduct];

  // 将更新后的产品数组写回 data.json 文件
  await writeFile('./data.json', JSON.stringify(updatedProducts), 'utf-8');

  // 返回成功信息
  return res.status(200).json({
    message: 'Product added successfully',
  });
});

// -------------------- 启动服务器 --------------------
server.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});