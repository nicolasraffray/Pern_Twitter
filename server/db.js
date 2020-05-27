const Pool = require("pg").Pool;

const pool = new Pool({
  user: "nicolasraffray",
  host: "localhost",
  port: 5432,
  database: "pern_chitter",
});

module.exports = pool;
