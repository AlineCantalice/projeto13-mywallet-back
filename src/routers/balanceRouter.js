import { Router } from 'express';
import { getBalance, postBalance } from '../controllers/balanceController.js';
import validateBalance from '../middlewares/balanceValidation.js'

const balanceRouter = Router();

balanceRouter.post("/balance", validateBalance, postBalance);
balanceRouter.get("/balance", getBalance);

export default balanceRouter;