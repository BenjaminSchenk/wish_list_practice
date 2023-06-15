const express = require('express')
const { Pool } = require('pg')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

const pool = new Pool ({
    connectionString: process.env.DATABASE_URL
})

app.use(express.static("public"))

app.get('/wishes', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM wishes')
        res.status(200).send(result.rows)
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal Server error', err)
    }
})

app.listen(PORT, () => {
    console.log('Listening on Port', PORT)
})