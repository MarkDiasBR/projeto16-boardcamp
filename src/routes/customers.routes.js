import { Router } from 'express';
import { getCustomers, getCustomerById, postCustomer, updateCustomerById } from '../controllers/customers.controller.js';

const customersRouter = Router();

customersRouter.get('/customers', getCustomers);
customersRouter.get('/customers/:id', getCustomerById);
customersRouter.post('/customers', postCustomer);
customersRouter.put('/customers/:id', updateCustomerById);

export default customersRouter;