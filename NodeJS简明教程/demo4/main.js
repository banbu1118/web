import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

const server = createServer(async (req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('Hello World!\n');

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const htmlFile = await readFile('./index.html', "utf-8")

        res.end(htmlFile);
    }

    if (req.url === '/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const jsonData = await readFile('./data.json', "utf-8")

        res.end(jsonData);
    }
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});
