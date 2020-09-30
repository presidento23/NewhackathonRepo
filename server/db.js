const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "1212urmommY",
  host: "localhost",
  port: 5432,
  database: "hackathon",
});

module.exports = pool;
