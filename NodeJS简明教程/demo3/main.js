// 从 node:readline/promises 模块中导入 createInterface，用于创建支持 Promise 的命令行交互接口
import { createInterface } from 'node:readline/promises';
// 从 node:process 模块导入标准输入 stdin 和标准输出 stdout
import { stdin, stdout } from 'node:process';

// 创建一个 readline 接口，绑定到标准输入输出
const readLine = createInterface({
    input: stdin,   // 用户在终端输入
    output: stdout  // 程序在终端输出
});

// 询问用户姓名，await 等待用户输入完成后返回字符串
const name = await readLine.question("What's your name?\n");

// 询问用户年龄
const age = await readLine.question("How old are you?\n");

// 计算用户的出生年份 = 当前年份 - 年龄
const birthYear = new Date().getFullYear() - Number(age);

// 再次询问用户确认出生年份是否正确
const answer = await readLine.question(`Welcome: ${name}, your birth year is ${birthYear} right?(y/n)\n`);

// 如果用户输入的第一个字符不是 Y/y，则认为年份不正确
if (answer[0].toUpperCase() !== 'Y') {
    // 输出一个“我猜你比这个年份还早一年出生”的消息
    console.log(`I know, you were born at ${birthYear - 1}!`);
}

// 关闭 readline 接口，结束输入
readLine.close();