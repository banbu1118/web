import Todo from '../models/todoModel.js';

export async function getAllTodos(offset, limit=5) {
  const todos = await Todo.findAll({ 
    offset,
     limit,
    //  order: [['id', 'DESC']],
     });

  return todos;
}

export async function getTodoById(todoId) {
  const todo = await Todo.findOne({ where: { id: todoId } });

  return todo;
}

export async function deleteTodoById(todoId) {
  await Todo.destroy({
    where: {
      id: todoId,
    },
  });
}

export async function createTodo(addTodo) {
  const addedTodo = await Todo.create(addTodo);

  return addedTodo;
}

export async function updateTodo(updateTodo) {
  await Todo.update(updateTodo, {
    where: {
      id: updateTodo.id,
    },
  });
}

export async function countTodo() {
  const count = await Todo.count();
  return count;
}