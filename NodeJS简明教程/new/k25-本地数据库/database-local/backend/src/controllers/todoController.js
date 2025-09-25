import {
  getAllTodos,
  getTodoById as getTodoByIdApi,
  deleteTodoById as deleteTodoByIdApi,
  createTodo as createTodoApi,
  updateTodo as updateTodoApi,
  countTodo as countTodoApi,
} from '../services/todoService.js';
import AppError from '../utils/AppError.js';
import { sendSuccessResponse, sendNotFoundResponse } from '../utils/responseHelper.js';

export async function getTodos(req, res) {
  const page = req.query.page || 1;
  const limit = req.query.limit || 5;
  const search = req.query.search || '';

  const offset = (page - 1) * limit;

  const todos = await getAllTodos(offset, limit, search);

  return sendSuccessResponse(res, todos);
}

export async function getTodoById(req, res) {

  const todo = await getTodoByIdApi(req.params.todoId);

  if (todo) {

    return sendSuccessResponse(res, todo);

  }

  return sendNotFoundResponse(res);
}

export async function deleteTodoById(req, res) {
  const todoId = req.params.todoId;

  if (!todoId) {
    throw new AppError(`The id todoId is required`, 400, 'Bad Request');

  }

  const deletedTodoNumber = await deleteTodoByIdApi(todoId);

  if (!deletedTodoNumber) {

    return sendNotFoundResponse(res);
  }

  return sendSuccessResponse(res, deletedTodoNumber);
}

export async function createTodo(req, res) {
  const addTodo = req.body;

  if (!addTodo) {
    throw new AppError(`The id todoId is required`, 400, 'Bad Request');

  }

  try {
    const addedTodo = await createTodoApi(addTodo);

    return sendSuccessResponse(res, addedTodo);
  } catch (err) {
    throw new AppError(`The id ${addTodo.id} already exists`, 400, err.name);
  }
}

export async function updateTodo(req, res) {
  const updateTodo = req.body;

  const updatedTodoNumber = await updateTodoApi(updateTodo);

  if (!updatedTodoNumber) {
    return sendNotFoundResponse(res);
  }

  return sendSuccessResponse(res, updatedTodoNumber);
}

export async function countTodo(req, res) {
  const search = req.query.search;

  const todoCount = await countTodoApi(search);

  return sendSuccessResponse(res, todoCount);
}
