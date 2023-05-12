import { Router } from 'express';
import { getRentals, postRental } from '../controllers/rentals.controller.js';

const rentalsRouter = Router();

rentalsRouter.post('/rentals', postRental);
rentalsRouter.get('/rentals', getRentals);

export default rentalsRouter;