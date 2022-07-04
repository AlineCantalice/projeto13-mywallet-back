import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js'
import balanceRouter from './routers/balanceRouter.js';
import validateToken from './middlewares/tokenValidation.js';

dotenv.config();

const app = express();
app.use(cors(), express.json());

app.use(userRouter);
app.use(validateToken, balanceRouter);

const PORT = process.env.PORT || 5001;
app.listen(process.env.PORT);