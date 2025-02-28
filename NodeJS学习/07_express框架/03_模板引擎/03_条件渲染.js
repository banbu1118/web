/* 
    通过islogin 决定最终的输出内容
    true 输出[<span>欢迎回来</span>]
    false 输出[<button>登录</button>  <button>注册</button>]
*/
//导入ejs模块
const ejs = require('ejs');
const fs = require('fs');

//变量
let islogin = true;

//原生js
// if (islogin) {
//     console.log('<span>欢迎回来</span>')
// } else {
//     console.log('<button>登录</button>  <button>注册</button>')
// }

//读取html内容
let html = fs.readFileSync('./03_home.html').toString();

//ejs实现
let result = ejs.render(html, { islogin: islogin });

console.log(result);
