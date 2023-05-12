import { Router } from 'express';
import { getCustomers, getCustomerById, postCustomer } from '../controllers/customers.controller.js';

const customersRouter = Router();

customersRouter.get('/customers', getCustomers);
customersRouter.get('/customers/:id', getCustomerById);
customersRouter.post('/customers', postCustomer);

export default customersRouter;