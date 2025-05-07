//声明一个函数
function tiemo() {
    console.log('贴膜');
}

//捏脚
function niejiao() {
    console.log('捏脚');
}

//暴露数据
// module.exports = {
//     tiemo: tiemo,
//     niejiao: niejiao
// }

//简写
// module.exports = {
//     tiemo,
//     niejiao
// }

// exports 暴露数据
//将等号右边的函数赋值给exports对象的属性
// exports.niejiao = niejiao;
// exports.tiemo = tiemo;

//module.exports 可以暴露任意数据
// module.exports = ' i love you'
// module.exports = 521

//不能使用exports = value 的方式导出数据，因为exports是一个对象，不能重新赋值
// exports = ' i love you' //错误