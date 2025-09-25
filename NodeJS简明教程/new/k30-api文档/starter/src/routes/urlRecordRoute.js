import express from 'express';
import { createURLRecord } from '../controllers/urlRecordController.js';

const urlRecordRouter = express.Router();

urlRecordRouter.route('/urlRecord').post(createURLRecord);

export default urlRecordRouter;