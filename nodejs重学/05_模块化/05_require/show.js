/* 
    伪代码
*/

function require(file) {
    //将相对路径转换为绝对路径
    let absolutedPath = path.resolve(__dirname, file)

    //缓存检测
    if (caches[absolutedPath]) {
        return caches[absolutedPath]
    }

    //读取文件代码
    let code = fs.readFileSync(absolutedPath).toString()


    //包裹为一个函数，然后执行
    let module = {}
    let exports = module.exports = {}
        (function (exports, require, module, __filename, __dirname) {
            const test = {
                name: '尚硅谷'
            }

            module.exports = test

            //输出
            console.log(arguments.callee.toString());

        })(exports, require, module, __filename, __dirname)

    //缓存结果
    caches[absolutedPath] = module.exports

    //返回结果
    return module.exports

}

const m = require('./me.js');