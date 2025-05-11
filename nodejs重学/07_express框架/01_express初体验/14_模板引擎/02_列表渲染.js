//导入ejs
const ejs = require('ejs')

//西游记
const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙僧']

// //原生js
// let str = '<ul>'

// xiyou.forEach(item => {
//     str += `<li>${item}</li>`
// })

// //闭合ul
// str += '</ul>'

// console.log(str)

const fs = require('fs')

let html = fs.readFileSync('./02_西游.html').toString()

//ejs实现
let result = ejs.render(html, { xiyou: xiyou })

console.log(result)