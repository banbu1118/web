//导入uniq
const uniq = require('uniq');

//使用函数
let arr = [1, 2, 3, 2, 1, 4, 5, 4];

const result = uniq(arr);
console.log(result);
