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
    res.json(post.rows);
  } catch (err) {
    console.err(err);
  }
});

app.put("/post/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { post } = req.body;
    const updatePost = await pool.query(
      `UPDATE Posts SET post = $1 WHERE PostID=$2`,
      [post, id]
    );
    res.json("post was updated");
  } catch (err) {
    console.err(err);
  }
});

app.post("/post", async (req, res) => {
  try {
    let arr = [];
    arr.push(req.body.post);
    const newPost = await pool.query(
      "INSERT INTO Posts (Post) VALUES($1) RETURNING *",
      arr
    );
    res.json(newPost.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/post/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletePost = await pool.query("DELETE FROM Posts WHERE PostID = $1", [
      id,
    ]);
    res.json("post was deleted");
  } catch (err) {
    console.err(err);
  }
});

app.get("/user", async (req, res) => {
  try {
    const Users = await pool.query("SELECT * FROM Users");
    res.json(Users.rows);
  } catch (err) {
    console.err(err);
  }
});

app.get("/user/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const user = await pool.query("SELECT * FROM Users WHERE Username = $1;", [
      username,
    ]);
    res.json(user.rows);
  } catch (err) {
    console.err(err);
  }
});

app.post("/user/:username", async (req, res) => {
  try {
    const user = await pool.query("SELECT * FROM Users WHERE Username = $1;", [
      req.body.username,
    ]);
    let auth = user.rows[0].password === req.body.password;
    if (auth) {
      res.json(auth);
    }
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/user", async (req, res) => {
  try {
    let arr = [];
    arr.push(req.body.email);
    arr.push(req.body.username);
    arr.push(req.body.password);
    const newUser = await pool.query(
      "INSERT INTO Users (email, username, password) VALUES($1,$2,$3) RETURNING *",
      arr
    );
    res.json(newUser.rows);
  } catch (err) {
    console.err(err);
  }
});

app.listen(port, () => {
  console.log(`Port is listening to ${port}`);
});

module.exports = app;
