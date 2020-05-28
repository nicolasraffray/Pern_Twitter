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
app.get("/post", async (req, res) => {
  try {
    const allPosts = await pool.query("SELECT * FROM Posts;");
    res.json(allPosts.rows);
  } catch (err) {
    console.error(err);
  }
});

app.get("/post/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await pool.query("SELECT * FROM Posts WHERE PostID = $1;", [
      id,
    ]);
    console.log("POST ROWS IN INDEX.JS", post.rows);
    res.json(post.rows);
  } catch (err) {
    console.err(err);
  }
});

app.post("/post", async (req, res) => {
  try {
    let arr = [];
    arr.push(req.body.post);
    arr.push(req.body.username);
    const newPost = await pool.query(
      "INSERT INTO Posts (Post, UserName) VALUES($1,$2) RETURNING *",
      arr
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
