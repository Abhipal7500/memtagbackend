const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', async (req, res) => {
  const { name, email, role } = req.body;

  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contact_form (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        role VARCHAR(100)
      )
    `);

    await pool.query(
      'INSERT INTO contact_form(name, email, role) VALUES($1, $2, $3)',
      [name, email, role]
    );

    res.status(201).json({ message: 'Submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Submission failed' });
  }
});

module.exports = router;
