//安装ejs
//导入ejs
const ejs = require('ejs');
const fs = require('fs');

//字符串
let china = '中国'
// let str = `我爱你 ${china}`
let weather = '今天天气不错~'

//声明变量
let str = fs.readFileSync('./01_html.html').toString()

//使用ejs渲染
let result = ejs.render(str, {china: china, weather: weather})

console.log(result);