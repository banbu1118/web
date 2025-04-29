//buffer与字符串的转换
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
console.log(buf_4.toString());  //utf-8编码

// []
// let buf = Buffer.from('hello')
// console.log(buf[0]);    //十进制
// console.log(buf[0].toString(2));    //转换位二进制

// console.log(buf);
// //修改buf内容
// buf[0] = 95
// console.log(buf);

//溢出
// let buf = Buffer.from('hello')
// buf[0] = 361    //舍弃高位的数字 0001 0110 1001 => 0110 1001
// console.log(buf);

//中文
// let buf = Buffer.from('你好')
// console.log(buf);

