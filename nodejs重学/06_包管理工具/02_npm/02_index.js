//导入uniq
// const uniq = require('uniq');
// const uniq = require('./node_modules/uniq')
const uniq = require('./node_modules/uniq/uniq.js')

//使用函数
let arr = [1, 2, 3, 2, 1, 4, 5, 4];

const result = uniq(arr);
console.log(result);
