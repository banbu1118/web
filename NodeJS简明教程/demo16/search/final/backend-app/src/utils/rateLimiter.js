import { rateLimit } from 'express-rate-limit'

export default rateLimit({
    windowMs: 1000,
    limit: 100,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    ipv6Subnet: 56,
    // store: ... ,
})

