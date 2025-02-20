//声明一个函数
function tiemo() {
    console.log('贴膜...');

}

//捏脚
function niejiao() {
    console.log('捏脚...');

}

//暴露数据
// module.exports = {
//     tiemo,
//     niejiao,
// }

//export 暴露数据
// exports.niejiao = niejiao;
// exports.tiemo = tiemo;

//mode.exports 可以暴露任意数据
// module.exports = 'iloveyou'
// module.exports = '521'

//不能使用exports = value的形势暴露数据
// exports = iloveyou

//exports = module.exports = {}

console.log(module.exports);
console.log(module.exports === exports);

