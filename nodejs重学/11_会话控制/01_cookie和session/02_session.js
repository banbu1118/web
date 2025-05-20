//导入express模块
const express = require('express')

//导入session-express模块和connect-mongo模块
const session = require('express-session')
const MongoStore = require('connect-mongo')

//创建app应用
const app = express()

//3. 设置 session 的中间件
app.use(session({
    name: 'sid', //设置cookie的name，默认值是：connect.sid
    secret: 'atguigu', //参与加密的字符串（又称签名） 加盐
    saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
    resave: true, //是否在每次请求时重新保存session
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/bilibili' //数据库的连接配置
    }),
    cookie: {
        httpOnly: true, // 开启后前端无法通过 JS 操作
        maxAge: 1000 * 60 * 5 // 这一条 是控制 sessionID 的过期时间的！！！
    },
}))

//创建路由规则
app.get('/', (req, res) => {
    res.send('home')
})

//登陆
app.get('/login', (req, res) => {
    //传递用户名和密码 username=admin&password=admin
    if (req.query.username === 'admin' && req.query.password === 'admin') {
        //设置session
        req.session.username = 'admin'
        req.session.uid = '258aefccc'
        // 成功响应
        res.send('登陆成功')
    } else {
        res.send('登陆失败')
    }
})

//读取session
app.get('/cart', (req, res) => {
    //检测session是否存在用户数据
    if (req.session.username) {
        res.send(`欢迎 ${req.session.username} 光临购物车`)
    } else {
        res.send('您还没有登陆')
    }
})

//session销毁
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        res.send('退出成功')
    })

})

//启动服务
app.listen(3000)