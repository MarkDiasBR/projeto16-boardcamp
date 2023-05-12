import { Router } from 'express';
import { postGame, getGames } from '../controllers/games.controller.js';

const gamesRouter = Router();

gamesRouter.get('/games', getGames);
gamesRouter.post('/games', postGame);

export default gamesRouter;