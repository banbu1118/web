//导入uniq包
const uniq = require('uniq');

//使用uniq包
let arr = [1,2,3,4,5,4,3,2,1]

const result = uniq(arr);

console.log(result); // [1, 2, 3, 4, 5]