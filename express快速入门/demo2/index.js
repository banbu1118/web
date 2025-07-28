const express = require('express');
const homeRouter = require('./routers/homeRouter')
const adminRouter = require('./routers/adminRouter')

const app = express();

app.use(homeRouter)
app.use(adminRouter)


app.listen(3000, () => {
    console.log('服务已启动，端口 3000');
});