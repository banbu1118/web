import express from 'express';
import cors from 'cors';
import { readFile, writeFile } from 'node:fs/promises';

const app = express();
app.use(cors()); // 允许跨域访问，方便前端在不同域名访问这个 API

const port = 3000;

// 获取所有 todos
app.get('/todos', async (_req, res) => {
  // 读取 data.json 文件里的数据
  const todosData = await readFile('./data.json', 'utf-8');
  const todos = JSON.parse(todosData); // 将 JSON 字符串转成 JS 数组

  return res.status(200).json(todos); // 返回所有 todos 数据
});

// 获取单个 todo
app.get('/todos/:todoId', async (req, res) => {
  const todosData = await readFile('./data.json', 'utf-8');
  const todos = JSON.parse(todosData);

  const todoId = req.params.todoId; // 从 URL 获取 todoId 参数

  // 在 todos 数组中查找匹配的 todo
  const todo = todos.find((todo) => todo.id === Number(todoId));

  if (todo) {
    return res.status(200).json(todo); // 找到就返回这个 todo
  }

  // 如果找不到，返回 404
  return res.status(404).send('404 Not Found');
});

// 删除一个 todo
app.get('/todos/delete/:todoId', async (req, res) => {
  const todosData = await readFile('./data.json', 'utf-8');
  const todos = JSON.parse(todosData);

  const todoId = req.params.todoId; // 获取要删除的 todoId

  // 过滤掉要删除的那个 todo
  const filteredTodos = todos.filter((todo) => todo.id !== Number(todoId));

  // 将新的 todos 数组写回 data.json
  await writeFile('./data.json', JSON.stringify(filteredTodos), 'utf-8');

  return res.status(200).json({
    message: 'Todo deleted successfully', // 返回删除成功的信息
  });
});

// 启动服务器，监听 3000 端口
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});