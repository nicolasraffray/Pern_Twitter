const app = require("./index.js");
const request = require("supertest");
const pool = require("./test_db");

// app.listen(5001, () => {
//   console.log("test listening to 5001");
// });

beforeAll(() => {
  console.log(pool);
  process.env.NODE_ENV = "test";
  pool.query(
    "INSERT INTO Posts (Post, UserName) VALUES ('test post', 'user123');"
  );
});

afterAll(() => {
  pool.query("TRUNCATE TABLE Posts;");
});

describe("POST /post", () => {
  it("has a functioning post route", async () => {
    await request(app)
      .post("/post")
      .send({ username: "usertest", post: "test post" })
      .then((response) => {
        expect(response.statusCode).toBe(200);
        console.log(response.body[0]);
        expect(response.body[0].post).toEqual("test post");
      });
  });
});
