import { db } from '../app.js';

export async function getCustomers(req, res) {

    try {
        const response = await db.query(`SELECT * FROM customers`);
        res.send(response.rows);
    } catch (err) {
        res.status(500).send(`🚫 Unexpected server error!\n\n${err.message}`);
    }
}

export async function getCustomerById(req, res) {

    const { id } = req.params;

    try {
        const response = await db.query(`SELECT * FROM customers WHERE id=$1`, [id]);
        res.send(response.rows[0]);
    } catch (err) {
        res.status(500).send(`🚫 Unexpected server error!\n\n${err.message}`);
    }
}

export async function postCustomer(req, res) {

    const { name, phone, cpf, birthday } = req.body;

    try {
        await db.query(`INSERT INTO customers (name, phone, cpf, birthday) VALUES ($1,$2,$3,$4)`,
        [name, phone, cpf, birthday]);
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(`🚫 Unexpected server error!\n\n${err.message}`);
    }
}

export async function updateCustomerById(req, res) {

    const { id } = req.params;
    const { name, phone, cpf, birthday } = req.body;

    try {
        await db.query(`UPDATE customers SET name=$1, phone=$2, cpf=$3, birthday=$4 WHERE id=$5`,
        [name, phone, cpf, birthday, id]);
        res.sendStatus(200);
    } catch (err) {
        res.status(500).send(`🚫 Unexpected server error!\n\n${err.message}`);
    }
}