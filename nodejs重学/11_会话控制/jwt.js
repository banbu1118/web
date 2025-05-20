//导入jwt模块
const { log } = require('console');
const jwt = require('jsonwebtoken');

//生成token
// let token = jwt.sign(用户数据,加密字符串,配置对象)
// let token = jwt.sign({
//     name: 'zhangsan',
// }, 'atguigu', {
//     expiresIn: 600  //单位是秒
// })


// console.log(token)

let t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiemhhbmdzYW4iLCJpYXQiOjE3NDc3NjAyMDYsImV4cCI6MTc0Nzc2MDgwNn0.Oj4I_t3mDQ7IltA2NatJp1QR4SnSN95_ZOQZZB0z-Pk'

//验证token
jwt.verify(t, 'atguigu', (err, data) => {
    if (err) {
        console.log('token验证失败');
        return
    }
    console.log(data);

})