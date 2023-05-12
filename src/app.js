import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDatabase from '../database/database.connection.js';
import connectToServer from '../server/server.connect.js';
import chalk from 'chalk';
// import router from './routes/index.routes.js';

const app = express();
app.use(json());
app.use(cors());
dotenv.config();

export const db = await connectToDatabase();

// app.use(router);

app.listen(process.env.PORT, () => {
    console.log(chalk.bgMagenta('\n [Node.js/Express] Server connected SUCCESSFULLY! '), '🖥️⚙️✨');
    console.log(chalk.white(' Server URL:'), chalk.blue.italic.underline(`http://localhost:${process.env.PORT}`));
});