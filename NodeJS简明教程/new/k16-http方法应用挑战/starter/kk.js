import express from 'express';
import cors from 'cors';
import { readFile, writeFile } from 'node:fs/promises';

const app = express();
app.use(cors());
app.use(express.json());

//查看所有todo
app.get('/todos', async (req, res) => {
    const data = await readFile('./data.json', 'utf8');
    const dataJson = JSON.parse(data);

    res.status(200).json(dataJson);
})

//根据id查看单个todo
app.get('/todos/:id', async (req, res) => {
    const data = await readFile('./data.json', 'utf8');
    const dataJson = JSON.parse(data);

    const todoid = req.params.id;

    const todo = dataJson.find(todo => todo.id === Number(todoid));

    if (todo) {
        res.send(todo);
    } else {
        res.status(404).send('Todo not found');
    }
})

//增加todo
app.post('/todos', async (req, res) => {
    const data = await readFile('./data.json', 'utf8');
    const dataJson = JSON.parse(data);

    const newTodo = req.body

    const newdata = [...dataJson, newTodo]

    await writeFile('./data.json', JSON.stringify(newdata),'utf-8');

    res.status(200).send('Todo added successfully');
})

//删除todo
app.delete('/todos/:id', async (req, res) => {
    const data = await readFile('./data.json', 'utf8');
    const dataJson = JSON.parse(data);

    const todoid = req.params.id;

    const newdata = dataJson.filter(todo => todo.id !== Number(todoid));

    await writeFile('./data.json', JSON.stringify(newdata));

    res.status(200).send('Todo deleted successfully');
})

//修改todo
app.patch('/todos', async (req, res) => {
    const data = await readFile('./data.json', 'utf8'); //读取数据
    const dataJson = JSON.parse(data); //解析数据

    const todoid = req.body

    const updatedTodos = dataJson.map(todo => {
        if(todo.id === todoid.id){
            return{...todo, ...todoid};
        }
        return todo
    })

    await writeFile('./data.json', JSON.stringify(updatedTodos),'utf-8'); //写入数据

    res.status(200).send('Todo updated successfully')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});