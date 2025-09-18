// 导入 express 框架
import express from 'express'
// 导入 Node.js 内置的 fs/promises 模块，用于异步读取文件
import { readFile } from 'fs/promises'

// 创建一个 Express 应用实例
const app = express()

// 设置服务器监听的端口
const port = 3000

// 定义一个 GET 请求路由，路由参数为 idolName
// 例如访问 http://127.0.0.1:3000/Lisa 时，idolName 就是 "Lisa"
app.get('/:idolName', async (req, res) => {
    // 从 URL 参数中获取 idolName
    const idolName = req.params.idolName

    // 读取本地 JSON 文件，utf-8 表示读取为字符串
    const idolDataText = await readFile('./data.json', 'utf-8')
    // 将读取到的 JSON 字符串解析为 JavaScript 对象
    const idolData = JSON.parse(idolDataText)

    // 在 idolData 中查找名字与 URL 参数匹配的对象（忽略大小写）
    const resultIdol = idolData.find(
        (idol) => idol.name.toLowerCase() === idolName.toLowerCase()
    )

    // 如果没找到，返回 404 状态码和提示信息
    if (!resultIdol) {
        return res.status(404).send('404 Not Found')
    }

    // 找到匹配数据，返回 200 状态码和 JSON 数据
    return res.status(200).json(resultIdol)
})

// 启动服务器，监听指定端口
// 启动成功后在控制台输出访问地址
app.listen(port, () => {
    console.log(`Example app listening on http://127.0.0.1:${port}`)
})
