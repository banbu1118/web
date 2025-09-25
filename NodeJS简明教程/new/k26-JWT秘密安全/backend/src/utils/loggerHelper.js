import pino from 'pino';
import pinoHttp from 'pino-http';

// 配置 Pino 日志输出目标（transport 定义日志去哪里、怎么输出）
const transport = pino.transport({
    targets: [
        {
            // 将 info 级别及以上的日志输出到 app-logs.log 文件
            target: 'pino/file', // 输出到文件
            level: 'info',       // 日志级别：info ≥ warn ≥ error
            options: {
                destination: './src/logs/app-logs.log', // 日志文件存储路径
                mkdir: true // 如果目录不存在则自动创建
            }
        },
        {
            // 将 error 级别的日志单独输出到 error.log 文件
            target: 'pino/file',
            level: 'error',
            options: {
                destination: './src/logs/error.log',
                mkdir: true
            }
        },
        {
            // 在控制台美化输出日志（仅开发环境推荐）
            target: 'pino-pretty', // 使用 pino-pretty 插件美化日志
            level: 'info',         // info 级别及以上的日志会显示
            options: {
                colorize: true // 控制台日志带颜色，便于阅读
            }
        }
    ]
})

// 创建 Pino 日志实例
export const logger = pino(transport)

// 创建 pino-http 中间件，用于自动记录 HTTP 请求/响应日志
// 在 Express 里通过 app.use(pinoHttpMiddleware) 使用
export const pinoHttpMiddleware = pinoHttp({
    logger: logger, // 使用上面定义的 Pino 实例，保证日志输出到同样的地方

    serializers: {
        res: (res) => {
            res.body = res.raw.body
            return res
        }
    },

    customLogLevel: function (_req, res, err) {
        if (res.statusCode >= 400 && res.statusCode < 500) {
            return 'warn'
        } else if (res.statusCode >= 500 || err) {
            return 'error'
        } else if (res.statusCode >= 300 && res.statusCode < 400) {
            return 'silent'
        }
        return 'info'
    },
})