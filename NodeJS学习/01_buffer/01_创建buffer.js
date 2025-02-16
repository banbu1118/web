// 1. alloc
//创建一个10字节的buffer,并用0填充
let buf = Buffer.alloc(10);
// console.log(buf); //<Buffer 00 00 00 00 00 00 00 00 00 00>

//2.allocUnsafe
//创建一个10字节的buffer,但不用0填充
let buf2 = Buffer.allocUnsafe(10000);
// console.log(buf2); // <Buffer 00 00 00 00 00 00 00 00 00 00>

//3.from
//创建一个包含'hello world'的buffer
let buf3 = Buffer.from('hello world');
console.log(buf3); // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
