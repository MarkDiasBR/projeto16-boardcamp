import { db } from '../app.js';

export async function postGame(req, res) {

    const { name, image, stockTotal, pricePerDay } = req.body;

    try {
        await db.query(`INSERT INTO games (name, image, "stockTotal", "pricePerDay") VALUES ($1,$2,$3,$4)`,
        [name, image, stockTotal, pricePerDay]);
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(`🚫 Unexpected server error!\n\n${err.message}`);
    }
}

export async function getGames(req, res) {

  try {
      const response = await db.query(`SELECT * FROM games`);
      res.send(response.rows);
  } catch (err) {
      res.status(500).send(`🚫 Unexpected server error!\n\n${err.message}`);
  }
}