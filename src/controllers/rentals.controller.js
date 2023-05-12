import { db } from '../app.js';

export async function postRental(req, res) {

    const { customerId, gameId, daysRented, rentDate, originalPrice } = req.body;


    try {
        await db.query(`INSERT INTO rentals ("customerId", "gameId", "daysRented", "rentDate", "originalPrice", "returnDate", "delayFee") VALUES ($1,$2,$3,$4,$5,NULL,NULL)`,
        [customerId, gameId, daysRented, rentDate, originalPrice]);
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(`🚫 Unexpected server error!\n\n${err.message}`);
    }
}

export async function getRentals(req, res) {

    try {
        const response = await db.query(`SELECT * FROM rentals`);
        res.status(200).send(response.rows);
    } catch (err) {
        res.status(500).send(`🚫 Unexpected server error!\n\n${err.message}`);
    }
}