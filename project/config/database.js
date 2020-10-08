  
const { createPool } = require("mysql");

const pool = createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.MYSQL_DB,
  connectionLimit: 10
});

module.exports = pool;