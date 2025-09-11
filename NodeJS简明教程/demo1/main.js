import { readFile } from 'node:fs/promises';

try {
    const data = await readFile('data.json', 'utf8'); // 异步+await
    console.log(data);
} catch (err) {
    console.error('捕获到错误:', err.message);
}
