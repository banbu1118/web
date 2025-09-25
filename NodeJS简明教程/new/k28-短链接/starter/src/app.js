import express from 'express';
import urlRecordRouter from './routes/urlRecordRoute.js';
import cors from 'cors';


// TODO:auth

const app = express();

app.use(express.json());

app.use(cors())

app.use('/v1', urlRecordRouter);


export default app;