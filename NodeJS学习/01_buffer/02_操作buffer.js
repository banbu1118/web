//buffer 与字符串的转换
// let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
// console.log(buf_4.toString()); //使用utf8编码，输出：iloveyou

//[]
// let buf = Buffer.from('hello')
// console.log(buf[0].toString(2)); //输出：01101000
// console.log(buf);
// buf[0] = 95;
// console.log(buf.toString());  //输出：_ello

//溢出
// let buf = Buffer.from('hello')
// buf[0] = 361 //8个bit，最大值255，超出范围，会溢出
// console.log(buf);

//中文
let buf = Buffer.from('你好');
console.log(buf);


