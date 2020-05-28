const app = require("./index.js");
const request = require("supertest");
const pool = require("./test_db");

beforeAll(() => {
  process.env.NODE_ENV = "test";
  pool.query(
    "INSERT INTO Posts (Post, UserName) VALUES ('test post', 'user123');"
  );
});

afterAll(() => {
  pool.query("TRUNCATE TABLE Posts;");
});

describe("GET /post", () => {
  it("retrieves all the posts", async () => {
    let response = await request(app)
      .get("/post")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body[0].post).toEqual("test post");
        expect(response.body[0].username).toEqual("user123");
      });
  });
});

describe("POST /post", () => {
  it("has a functioning post route", async () => {
    await request(app)
      .post("/post")
      .send({ username: "usertest", post: "test post" })
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body[0].post).toEqual("test post");
        expect(response.body[0].username).toEqual("usertest");
      });
  });
});

describe("Get /post/:id", () => {
  it("can get a specific post", async () => {
    let id = await request(app)
      .get("/post")
      .then((response) => {
        return response.body[0].postid;
      });
    const tweet = await request(app)
      .get(`/post/${id}`)
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("PUT /post/:id", () => {
  it("can update a specific post", async () => {
    let id = await request(app)
      .get("/post")
      .then((response) => {
        return response.body[0].postid;
      });
    const put = await request(app)
      .put(`/post/${id}`)
      .send({ post: "new test tweet" })
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual("post was updated");
      });

    const get = await request(app)
      .get(`/post/${id}`)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body[0].post).toEqual("new test tweet");
      });
  });
});

describe("DELETE /post/:id", () => {
  it("can delete a specific post", async () => {
    let id = await request(app)
      .get("/post")
      .then((response) => {
        console.log(response.body[0]);
        return response.body[0].postid;
      });
    await request(app)
      .delete(`/post/${id}`)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual("post was deleted");
      });
    await request(app)
      .get(`/post/${id}`)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).not.toContain({
          postid: id,
          username: "usertest",
          post: "test post",
        });
      });
  });
});
