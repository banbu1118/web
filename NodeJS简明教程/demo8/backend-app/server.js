import express from 'express';
import { readFile } from 'fs/promises';
import cors from 'cors';

const app = express();
app.use(cors());

const port = 3000;

app.get('/todos', async (_req, res) => {
  const todosData = await readFile('./data.json', 'utf8')
  const todos = JSON.parse(todosData);

  return res.status(200).json(todos);
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
