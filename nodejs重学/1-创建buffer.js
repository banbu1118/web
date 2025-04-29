// 1.alloc
//创建一个10字节的buffer
let buf = Buffer.alloc(10)
// console.log(buf);

// 2.allocUnsafe，速度要快一点
let buf_2 = Buffer.allocUnsafe(1000)
// console.log(buf_2);

// 3.from
let buf_3 = Buffer.from('helllo')
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
// console.log(buf_3);
console.log(buf_4);
