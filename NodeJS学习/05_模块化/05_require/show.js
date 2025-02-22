/* 
    伪代码
*/

function require(file) {
    //1.将相对路径转为绝对路径，定位目标文件
    let absolutedPath = path.resolve(__dirname, file)

    //2.缓存检查
    if (caches[absolutedPath]) {
        return caches[absolutedPath]
    }

    //3.读取文件内容
    let code = fs.readFileSync(absolutedPath).tostring()


    //4.包裹为一个函数，然后执行
    let module = {}
    let exports = module.exports = {}
        (function (exports, require, module, __filename, __dirname) {
            const test = {
                name: 'test'
            }

            module.exports = test;

            //输出
            console.log(arguments.callee.toString());

        })()(exports, require, module, __filename, __dirname)

    //5.缓存结果
    caches[absolutedPath] = module.exports

    //6.返回module.exports的值
    return module.exports
}

const m = require('./me.js')