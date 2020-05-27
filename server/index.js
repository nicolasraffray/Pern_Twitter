const express = require("express");
const cors = require("cors");
const pool = require("./db");

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

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
