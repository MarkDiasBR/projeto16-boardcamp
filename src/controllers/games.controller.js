import { db } from '../app.js';

export async function postGame(req, res) {

    const { name, image, stockTotal, pricePerDay } = req.body;

    try {
        await db.query(`INSERT INTO games (name, stockTotal, pricePerDay) VALUES ($1,$2,$3)`,
        [name, image, stockTotal, pricePerDay])
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(`🚫 Unexpected server error!\n\n${err.message}`);
    }
}

export async function getGames(req, res) {

  // const { name, stockTotal, pricePerDay } = req.body;
  
  try {
      const response = await db.query(`SELECT * FROM games`)
      res.send(console.log(response.rows));
  } catch (err) {
      res.status(500).send(`🚫 Unexpected server error!\n\n${err.message}`);
  }
}