import { Router } from 'express';
import { getCustomers } from '../controllers/customers.controller.js';

const customersRouter = Router();

customersRouter.get('/customers', getCustomers);
// customersRouter.post('/customers', postGame);

export default customersRouter;