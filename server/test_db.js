const Pool = require("pg").Pool;

const pool_test = new Pool({
  user: "nicolasraffray",
  host: "localhost",
  port: 5432,
  database: "pern_chitter_test",
});

module.exports = pool_test;
