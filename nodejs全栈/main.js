// outter:
// for (let i = 0; i < 10; i++) {
//     inner:
//     for (let j = 0; j < 10; j++) {
//         if (j === 3) {
//             break inner
//         }
//         console.log(i + '-' + j);

//     }
// }

// var lock = true
// for (var i = 0; i < 10; i++) {
//     if (lock) {
//         for (var j = 0; j < 10; j++) {
//             if (j === 5) {
//                 lock = false
//             }
//             console.log(i + '-' + j);

//         }
//     }
// }

// for(var i=0;i<10;i++){
//     console.log(10-i);

// }

// for (var i = 10; i >= 0; i--) {
//     for (var j = 10; j >= 0; j--) {
//         console.log(i + '-' + j);
//     }
// }

// var a = 0
// while (a < 10) {
//     console.log(a);
//     a++;

// }

// var person = {
//     name: "小明",
//     age: 12,
//     gender: "male",
//     height: 150
// }

// for (var key in person) {
//     console.log(key + ":" + person[key]);

// }

// var obj = {
//     name: '',
//     age: '',
//     gender: '',
//     height: ''
// }


// var result = '100'

// result += 100

// result = - result/2 +''
// console.log(result, typeof result)
// +result
// console.log(result, typeof result)
// result = +result

// console.log(result,typeof result)

// var person = {
//     name: "小明",
//     age: 12,
//     gender: "male",
//     height: 150
// }

// var result = '';
// var count = 0
// var temp = '';
// for (var key in person) {
//     count++;
//     if (count === 5) {
//         var temp = key + "=" + person[key] + "&";
//     }
//     else {
//         result += key + "=" + person[key];
//     }
//     result += temp;

// }

// console.log(result);

// var person = {
//     name: "小明",
//     age: 38,
//     gender: "male"
// }

// const { log } = require('node:console')
// if (person.age < 18) {
//     person.girlfriend = null;
// } else if (person.age < 25) {
//     person.girlfriend = "小丽";
// } else if (person.age < 30) {
//     if ('girlfriend' in person) {
//         delete person.girlfriend;
//     }
//     person.wife = "小丽"
// } else {
//     person.child = {
//         name: "小小明",
//         age: 3,
//         gender: "female"
//     }
// }
// console.log(person);

// switch(true){
//     case person.age < 18:
//         person.girlfriend = null;
//         break;
//     case person.age < 25:
//         person.girlfriend = "小丽";
//         break;
//     case person.age < 30:
//         if ('girlfriend' in person) {
//             delete person.girlfriend;
//         }
//         person.wife = "小丽";
//         break;
//     default:
//         person.child = {
//             name: "小小明",
//             age: 3,
//             gender: "female"
//         }
//         break;
// }

// console.log(person);


// function fine() {
//     console.log("test");

// }

// console.log(fine());

// fine()

// console.log(console);

// function loop() {
//     for (var i = 0; i < 9; i++) {
//         for (var j = 0; j < 9; j++) {
//             console.log(i + "-" + j);
//         }
//     }
// }

// loop()

// var obj = {
//     loop() {
//         for (var i = 9; i >8; i--) {
//             for (var j = 9; j >6; j--) {
//                 console.log(i + "-" + j);
//             }

//         }
//     }
// }

// obj.loop()



// var obj = {
//     loop() {
//         outter:
//         for (var i = 9; i > 0; i--) {
//             inner:
//             for (var j = 9; j > 0; j--) {
//                 console.log(i + "-" + j);
//                 if (j === 7) {
//                     break outter;
//                 }
//             }

//         }
//     }
// }

// obj.loop()


// var lock = false

// function loop() {
//     for (var i = 9; i > 0; i--) {
//         if (lock) {
//             break
//         }
//         for (var j = 9; j > 0; j--) {
//             console.log(i + '-' + j);
//             if (j === 7) {
//                 lock = true
//                 break
//             }


//         }
//     }
// }

// loop()

// function speak(x){
//     console.log(x);

// }


// speak("hello");
// speak("world k1");
// speak("world k2");
// speak("world k3");
// speak({name:"obj"})

// function speak(x,y,z,a,bcd){
//     console.log(x);
//     console.log(y);
//     console.log(z);
//     console.log(a);
//     console.log(bcd);

// }

// speak("hello","world","k1","k2","k3");

// function fn(x) {
//     if (typeof x === "string") {
//         console.log(x + " is string");
//     }
//     else if (typeof x === "boolean") {
//         console.log(x + " is boolean");
//     }
//     else if (typeof x === "number") {
//         console.log(x + " is number");
//     }
//     else if (typeof x === "object") {
//         console.log(x + " is object");
//     }
//     else {
//         console.log(x + " is undefined");
//     }
// }

// fn("hello")
// fn(true)
// fn(123)
// fn(null)
// fn(undefined)
// fn({})

// function fn(x) {
//     switch (typeof x) {
//         case "string":
//             console.log(x + " is string");
//             break;
//         case "boolean":
//             console.log(x + " is boolean");
//             break;
//         case "number":
//             console.log(x + " is number");
//             break;
//         case "object":
//             console.log(x + " is object");
//             break;
//         default:
//             console.log(x + " is undefined");
//     }
// }

// fn("hello")
// fn(true)
// fn(123)
// fn(null)
// fn(undefined)
// fn({})

// function callFunc(fn){
//     if(typeof fn === "function"){
//         fn();
//     }
// }

// callFunc()

// function fn(obj) {
//     if (typeof obj === "object") {
//         var temp = {
//             ...obj
//         }
//         if (!('name' in temp)) {
//             temp.name = "小明";
//             return temp;
//         }
//     }
// }

// var obj = {}

// var result = fn(obj)

// console.log(obj);
// console.log(result);

// function a() {
//     return 1
// }

// var a = function(){
//     return 1
// }

// console.log(a())

// var a = ()=>1

// console.log(a())

// function b(x) {
//     return x
// }

// var b = function(x) {
//     return x
// }

// console.log(b(2))

// var b = (x)=>x

// console.log(b(2))

// function c(x, y) {
//     return x + y
// }

// var c = function (x, y) {
//     return x + y
// }

// console.log(c(2,3))

// var c = (x, y) => x + y

// console.log(c(2, 3))

// function d(x, y, z) {
//     var result = x + y + z;
//     return result;
// }

// var d = function (x, y, z) {
//     var result = x + y + z;
//     return result;
// }

// console.log(d(2, 3, 4))

// var d = (x, y, z) => {
//     var result = x + y + z;
//     return result;
// }

// console.log(d(2, 3, 4))

//构造函数不能用箭头函数的写法
// function CatConstructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.miao = function () {
//         console.log("喵喵喵");

//     }
// }

// //new关键字
// const cat1 = new CatConstructor("eleven", 5);

// console.log(cat1);

// var http = require('http');

// http.createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.write('Hello World');
//     response.end();
// }).listen(8888)

// console.log(process.env);

// const crypto = require('crypto');

// const input = JSON.stringify({
//     name: "张三",
//     expire_time: 156372344
// })

// const key = "fwefsxc23nd8234fd8s4532b12345678"

// //创建cipher示例，选择算法为aes-256-cbc，使用密钥
// const iv = crypto.randomBytes(16);
// const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);

// //加密输入数据并转化为十六进制字符串
// let encrypted = cipher.update(input, 'utf8', 'hex');
// encrypted += cipher.final('hex');

// console.log('Encrypted:', encrypted);

// //创建Decipher示例，选择算法为aes-256-cbc，使用密钥
// const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);

// //解密输入数据并转化为utf8字符串
// let decrypted = decipher.update(encrypted, 'hex', 'utf8');
// decrypted += decipher.final('utf8');

// console.log('Decrypted:', decrypted);


const os = require('os');
console.log(os.cpus()); // CPU 信息
console.log(os.freemem()); // 空闲内存
