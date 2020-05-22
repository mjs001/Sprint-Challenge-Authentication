const supertest = require("supertest");

const server = require("./server.js");
const db = require("../database/dbConfig.js");

afterEach(async () => {
  await db("users2").truncate();
});

describe("POST /api/auth/register/", () => {
  it("should create a new user and make sure it has the property username", async () => {
    const res = await supertest(server)
      .post("/api/auth/register")
      .send({ username: "cataaa", password: "abaa" });
    expect(res.body.data).toHaveProperty("username");
  });

  describe("POST /api/auth/register/", () => {
    it("should create a new user and make sure it has the property id", async () => {
      const res = await supertest(server)
        .post("/api/auth/register")
        .send({ username: "cat2aaa", password: "abcaa" });
      expect(res.body.data).toHaveProperty("id");
    });
  });
});

describe("POST /api/auth/login/", () => {
  it("should create a new user", () => {
    return supertest(server)
      .post("/api/auth/register")
      .send({ username: "cat", password: "meow" })
      .then((response) => {
        expect(response.body).toHaveProperty("message");
      });
  });
});

describe("POST /api/auth/login/", () => {
  it("should create a new user", () => {
    return supertest(server)
      .post("/api/auth/register")
      .auth("username", "password")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
  });
});
