import express from 'express';
import cors from 'cors';
import todoRouter from './routes/todoRoute.js';
import { pinoHttpMiddleware } from './utils/loggerHelper.js';
import rateLimit from './utils/rateLimiter.js';
import globalErrorhandler from './utils/globalErrorhandler.js';
import userRouter from './routes/userRoute.js';
import { verifyToken } from './utils/jwtHelper.js';


const app = express();

app.use(cors());
app.use(express.json());

app.use(rateLimit);

app.use(pinoHttpMiddleware)

app.use('/v1', userRouter);

app.use(async(req, res, next) => {
const authorization = req.headers.authorization
if(!authorization){
return res.status(401).json({ message: 'Unauthorized' })
}
const token = authorization.split(' ')[1]

await verifyToken(token)

next()
})

app.use('/v1', todoRouter);

app.use(globalErrorhandler)

export default app;
