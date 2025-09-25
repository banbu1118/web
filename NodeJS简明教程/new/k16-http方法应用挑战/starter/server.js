// 引入 express 框架
import express from 'express';
// 引入 cors 中间件，解决跨域请求问题
import cors from 'cors';
// 引入 Node.js 文件系统 Promise 版本，用于读写文件
import { readFile, writeFile } from 'node:fs/promises';

// 创建 Express 应用实例
const app = express();

// 使用 CORS 中间件，允许不同源的前端访问
app.use(cors());
// 使用 JSON 中间件，自动解析请求体中的 JSON 数据
app.use(express.json());

// 定义服务端口
const port = 3000;

/**
 * 获取所有待办事项
 * 请求方式: GET
 * 路径: /todos
 */
app.get('/todos', async (_req, res) => {
  // 读取 data.json 文件内容
  const todosData = await readFile('./data.json', 'utf-8');
  // 将 JSON 字符串转换为数组对象
  const todos = JSON.parse(todosData);
  // 返回 200 状态码和 todos 数据
  return res.status(200).json(todos);
});

/**
 * 根据 ID 获取单个待办事项
 * 请求方式: GET
 * 路径: /todos/:todoId
 */
app.get('/todos/:todoId', async (req, res) => {
  const todosData = await readFile('./data.json', 'utf-8');
  const todos = JSON.parse(todosData);

  // 从请求路径中获取 todoId
  const todoId = req.params.todoId;

  // 查找匹配 ID 的待办事项
  const todo = todos.find((todo) => todo.id === Number(todoId));

  // 如果找到，返回对应待办，否则返回 404
  if (todo) {
    return res.status(200).json(todo);
  }
  return res.status(404).send('404 Not Found');
});

/**
 * 根据 ID 删除待办事项
 * 请求方式: DELETE
 * 路径: /todos/:todoId
 */
app.delete('/todos/:todoId', async (req, res) => {
  const todosData = await readFile('./data.json', 'utf-8');
  const todos = JSON.parse(todosData);

  // 获取待删除的 ID
  const todoId = req.params.todoId;

  // 过滤掉指定 ID 的待办
  const filteredTodos = todos.filter((todo) => todo.id !== Number(todoId));

  // 将更新后的数据写回文件
  await writeFile('./data.json', JSON.stringify(filteredTodos), 'utf-8');

  // 返回成功提示
  return res.status(200).json({
    message: 'Todo deleted successfully',
  });
});

/**
 * 添加新的待办事项
 * 请求方式: POST
 * 路径: /todos
 */
app.post('/todos', async (req, res) => {
  const todosData = await readFile('./data.json', 'utf-8');
  const todos = JSON.parse(todosData);

  // 获取前端传来的新待办数据
  const addTodo = req.body;

  // 添加到现有数组中
  const updatedTodos = [...todos, addTodo];

  // 写回文件
  await writeFile('./data.json', JSON.stringify(updatedTodos), 'utf-8');

  return res.status(200).json({
    message: 'Todo added successfully',
  });
});

/**
 * 更新待办事项
 * 请求方式: PATCH
 * 路径: /todos
 */
app.patch('/todos', async (req, res) => {
  const todosData = await readFile('./data.json', 'utf-8');
  const todos = JSON.parse(todosData);

  // 获取前端传来的更新数据
  const updateTodo = req.body;

  // 遍历 todos，找到 ID 匹配的待办，合并更新字段
  const updatedTodos = todos.map((todo) => {
    if (todo.id === updateTodo.id) {
      return {
        ...todo,
        ...updateTodo, // 合并更新数据
      };
    }
    return todo;
  });

  // 写回文件
  await writeFile('./data.json', JSON.stringify(updatedTodos), 'utf-8');

  return res.status(200).json({
    message: 'Todo updated successfully',
  });
});

// 启动服务器
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});