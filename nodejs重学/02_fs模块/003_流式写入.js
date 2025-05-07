/* 
    需求：写一首诗，观书有感
*/

//导入fs模块
const fs = require('fs');

//创建可写流对象
const ws = fs.createWriteStream('./观书有感.txt')

//写入数据
ws.write('半亩方塘一鉴开\r\n')
ws.write('天光云影共徘徊\r\n')
ws.write('问渠那得清如许\r\n')
ws.write('为有源头活水来')

//关闭流
ws.end()