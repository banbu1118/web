// 导入所需的模块
import express from 'express';
import cors from 'cors';
import { readFile, writeFile } from 'node:fs/promises'; // 异步读写文件

// 创建 Express 应用
const app = express();

// 解决跨域问题，允许前端请求本地服务
app.use(cors());

const port = 3000; // 服务器监听端口

// -------------------- 获取所有待办事项 --------------------
app.get('/todos', async (_req, res) => {
  // 读取 data.json 文件中的数据
  const todosData = await readFile('./data.json', 'utf-8');
  const todos = JSON.parse(todosData); // 转换为 JS 对象

  // 返回所有待办事项
  return res.status(200).json(todos);
});

// -------------------- 获取指定 ID 的待办事项 --------------------
app.get('/todos/:todoId', async (req, res) => {
  // 读取数据
  const todosData = await readFile('./data.json', 'utf-8');
  const todos = JSON.parse(todosData);

  // 获取 URL 参数中的 todoId
  const todoId = req.params.todoId;

  // 查找对应的待办事项
  const todo = todos.find((todo) => todo.id === Number(todoId));

  // 如果找到，返回待办事项；否则返回 404
  if (todo) {
    return res.status(200).json(todo);
  }

  return res.status(404).send('404 Not Found');
});

// -------------------- 删除指定 ID 的待办事项 --------------------
app.get('/todos/delete/:todoId', async (req, res) => {
  // 读取数据
  const todosData = await readFile('./data.json', 'utf-8');
  const todos = JSON.parse(todosData);

  // 获取要删除的待办 ID
  const todoId = req.params.todoId;

  // 过滤掉要删除的待办事项
  const filteredTodos = todos.filter((todo) => todo.id !== Number(todoId));

  // 将更新后的数据写回文件
  await writeFile('./data.json', JSON.stringify(filteredTodos), 'utf-8');

  // 返回删除成功信息
  return res.status(200).json({
    message: 'Todo deleted successfully',
  });
});

// -------------------- 添加新的待办事项 --------------------
app.get('/todos/add/:addTodo', async (req, res) => {
  // 读取数据
  const todosData = await readFile('./data.json', 'utf-8');
  const todos = JSON.parse(todosData);

  // 获取新待办事项数据并解析成对象
  const addTodo = req.params.addTodo;
  const parsedAddTodo = JSON.parse(addTodo);

  // 把新的待办添加到列表中
  const updatedTodos = [...todos, parsedAddTodo];

  // 写回文件
  await writeFile('./data.json', JSON.stringify(updatedTodos), 'utf-8');

  // 返回添加成功信息
  return res.status(200).json({
    message: 'Todo added successfully',
  });
});

// -------------------- 更新指定 ID 的待办事项 --------------------
app.get('/todos/update/:updateTodo', async (req, res) => {
  // 读取数据
  const todosData = await readFile('./data.json', 'utf-8');
  const todos = JSON.parse(todosData);

  // 获取更新后的待办事项数据
  const updateTodo = req.params.updateTodo;
  const parsedUpdateTodo = JSON.parse(updateTodo);

  // 遍历更新列表，找到对应的待办事项并更新
  const updatedTodos = todos.map((todo) => {
    if (todo.id === parsedUpdateTodo.id) {
      return {
        ...todo,
        ...parsedUpdateTodo, // 用新的数据覆盖旧的
      };
    }
    return todo;
  });

  // 写回文件
  await writeFile('./data.json', JSON.stringify(updatedTodos), 'utf-8');

  // 返回更新成功信息
  return res.status(200).json({
    message: 'Todo updated successfully',
  });
});

// -------------------- 启动服务器 --------------------
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});