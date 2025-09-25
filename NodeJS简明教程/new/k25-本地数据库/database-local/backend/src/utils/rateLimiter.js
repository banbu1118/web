import { rateLimit } from 'express-rate-limit'

// 配置限流中间件
export default rateLimit({
  windowMs: 1000,          // 时间窗口：1 秒
  limit: 5,              // 每个 IP 在时间窗口内最多可发 100 个请求
  standardHeaders: 'draft-8', // 在响应头返回限流信息，遵循 draft-8 标准
  legacyHeaders: false,    // 禁用旧版 X-RateLimit-* 头
  ipv6Subnet: 56,          // 针对 IPv6 地址的子网掩码，减少每个唯一 IPv6 地址的存储量
  // store: ... ,           // 可选：自定义存储，比如用 Redis 代替内存存储，适合分布式部署
})
