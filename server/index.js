const express = require("express");
const cors = require("cors");
const port = process.env.NODE_ENV === "test" ? 5001 : 5000;
let pool;

if (process.env.NODE_ENV === "test") {
  pool = require("./test_db");
} else {
  pool = require("./db");
}
// const pool = require("./test_db");

const app = express();

// Middle Ware
app.use(cors());
app.use(express.json());

// Routes
app.post("/post", async (req, res) => {
  try {
    const { post } = req.body;
    const newPost = await pool.query(
      "INSERT INTO Posts (Post) VALUES($1) RETURNING *",
      [post]
    );
    console.log(newPost.rows);
    res.json(newPost.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log(`Port is listening to ${port}`);
});

module.exports = app;
