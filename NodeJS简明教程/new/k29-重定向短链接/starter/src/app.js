import express from 'express';
import urlRecordRouter from './routes/urlRecordRoute.js';
import cors from 'cors';
import urlRedirectRouter from './routes/urlRedirectRoute.js';


// TODO:auth

const app = express();

app.use(express.json());

app.use(cors())

app.use('/v1', urlRecordRouter);
app.use('/v1', urlRedirectRouter);


export default app;