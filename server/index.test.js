const app = require("./index.js");
const request = require("supertest");
const pool = require("./test_db");

beforeAll(() => {
  process.env.NODE_ENV = "test";
});

afterAll(() => {
  pool.query("Truncate TABLE Posts;");
});

describe("posts", () => {
  it("POST /post", async () => {
    await request(app)
      .post("/post")
      .send({ post: "test post" })
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body[0].post).toEqual("test post");
      });
  });

  it("GET /post", async () => {
    let response = await request(app)
      .get("/post")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        console.log("LOOK HERE", response.body[0].post);
        expect(response.body.length).toEqual(1);
      });
  });

  it("Get /post/:id", async () => {
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

  it("PUT /post/:id", async () => {
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

  it("DELETE /post/:id", async () => {
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

describe("Users", () => {
  beforeAll(() => {
    // pool.query("DELETE FROM Users WHERE userid > 0;");
    pool.query(
      "INSERT INTO Users (email,username,password) VALUES ('email@example.com', 'test', 'password')"
    );
  });

  afterAll(() => {
    pool.query("DELETE FROM Users WHERE userid > 0;");
  });

  it("GET /user", async () => {
    let response = await request(app)
      .get("/user")
      .then((response) => {
        console.log(response.body);
        expect(response.statusCode).toBe(200);
        expect(response.body[0].email).toEqual("email@example.com");
        expect(response.body[0].username).toEqual("test");
      });
  });
  it("GET /user/:username", async () => {
    let id = await request(app)
      .get("/user")
      .then((response) => {
        return response.body[0].username;
      });
    const user = await request(app)
      .get(`/user/${id}`)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        console.log("SPECIFIC USER", response.body);
      });
  });

  it("POST /user", async () => {
    await request(app)
      .post("/user")
      .send({
        email: "test1@example.com",
        username: "user1",
        password: "password",
      })
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body[0].username).toEqual("user1");
      });
  });
});
