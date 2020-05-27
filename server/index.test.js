const app = require("./index.js");
const request = require("supertest");

// app.listen(5001, () => {
//   console.log("test listening to 5001");
// });

beforeAll(() => {
  process.env.NODE_ENV = "test";
});

afterEach(() => {
  res = await pool.query("TRUNCATE TABLE Posts")
});

describe("POST /post", () => {
  it("has a functioning post route", async () => {
    await request(app)
      .post("/post")
      .send({ username: "usertest", post: "test post" })
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
