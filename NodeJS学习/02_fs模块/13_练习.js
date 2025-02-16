//1.引入fs模块
const fs = require('fs');

//2.读取练习目录
const files = fs.readdirSync('./练习')

//3.遍历练习目录
files.forEach(file => {
    //拆分文件名
    let data = file.split('_');
    let [num, name] = data

    //判断
    if (Number(num) < 10) {
        num = '0' + num
    }

    //创建新文件名
    let newfile = num + '_' + name
    console.log(newfile);

    //重命名文件
    fs.renameSync(`./练习/${file}`,`./练习/${newfile}`)
    

})