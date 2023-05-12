import { Router } from 'express';
import gamesRouter from './games.routes.js';
// import authRouter from './auth.routes.js';
// import userRouter from './user.routes.js';

const router = Router();
// router.use(userRouter);
// router.use(authRouter);
router.use(gamesRouter);

export default router;