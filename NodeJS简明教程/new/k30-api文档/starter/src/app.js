import express from 'express';
import urlRecordRouter from './routes/urlRecordRoute.js';
import cors from 'cors';
import urlRedirectRouter from './routes/urlRedirectRoute.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' with  {type: 'json'};


// TODO:auth

const app = express();

app.use(express.json());

app.use(cors())

app.use('/v1', urlRecordRouter);
app.use('/v1', urlRedirectRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;