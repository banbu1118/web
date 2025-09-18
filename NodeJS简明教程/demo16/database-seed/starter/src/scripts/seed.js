import { readFile } from 'node:fs/promises'
import sequelize from '../utils/dbHelper.js'
import Todo from '../models/todoModel.js';

try {
    const initializeTodoString = await readFile("./src/scripts/data/initData.json", "utf-8")

    const initializeTodos = JSON.parse(initializeTodoString)


    await sequelize.authenticate();

    await Todo.sync({ force: true });

    const result = await Todo.bulkCreate(initializeTodos);

    console.log(JSON.stringify(result, null, 2));

} catch (error) {
    console.log(error);
} finally {
    sequelize.close();
}