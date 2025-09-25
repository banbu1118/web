// server.mjs
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';



const server = createServer(async (req, res) => {
    //   res.writeHead(200, { 'Content-Type': 'text/plain' });

    // const htmlFile = await readFile('./index.html', 'utf8');

    // res.writeHead(200, { 'Content-Type': 'text/html' });

    // res.end(htmlFile);

    const data = await readFile('./data.json', 'utf8')

    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(data)

});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
