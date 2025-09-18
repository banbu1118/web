import Todo from '../models/todoModel.js';

// TODO: Implement all the service functions via sequelize model(Todo)
export async function getAllTodos() {
    const todos = await Todo.findAll();
    return todos;
}

export async function getTodoById(todoId) {
    const todo = await Todo.findOne({ where: { id: todoId } });
    return todo;
}

export async function deleteTodoById(todoId) {
    const deletedTodo = await Todo.destroy({ where: { id: todoId } });
    return deletedTodo;
}

export async function createTodo(addTodo) {
    const addedTodo = await Todo.create(addTodo);
    return addedTodo;
}

export async function updateTodo(updateTodo) {
     await Todo.update(updateTodo, { where: { id: updateTodo.id } });
}
