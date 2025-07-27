const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/11_form.html');
});

app.post('/login', (req, res) => {
    console.log(req.body);
    res.send('获取用户数据！');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});
