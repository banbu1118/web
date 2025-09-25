import app from './app.js';

const port = 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`API docs available at http://localhost:${port}/api-docs`);
    
})