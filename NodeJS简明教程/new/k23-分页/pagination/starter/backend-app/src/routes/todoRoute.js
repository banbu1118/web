import express from 'express';
import {
  createTodo,
  deleteTodoById,
  getTodoById,
  getTodos,
  updateTodo,
  countTodo
} from '../controllers/todoController.js';

const router = express.Router();

router.get('/todos/count',countTodo)
router.route('/todos').get(getTodos).post(createTodo).patch(updateTodo);
router.route('/todos/:todoId').get(getTodoById).delete(deleteTodoById);


export default router;
