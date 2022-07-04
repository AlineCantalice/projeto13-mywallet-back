import { Router } from 'express';
import { getBalance, postBalance } from '../controllers/balanceController.js';
import validateBalance from '../middlewares/balanceValidation.js'
import validateToken from '../middlewares/tokenValidation.js';

const balanceRouter = Router();

balanceRouter.post("/balance", validateToken, validateBalance, postBalance);
balanceRouter.get("/balance", validateToken, getBalance);

export default balanceRouter;