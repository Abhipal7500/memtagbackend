const { Pool } = require('pg');
require('dotenv').config();
console.log("Postgres password:", process.env.PG_PASS);
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PASS,
  port: parseInt(process.env.PG_PORT, 10) || 5432, 
});

module.exports = pool;
