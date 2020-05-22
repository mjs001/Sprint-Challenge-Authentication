const supertest = require("supertest");

const server = require("./server.js");
const db = require("../database/dbConfig.js");
afterEach(async () => {
  await db("users2").truncate();
});

describe("POST /api/auth/register/", () => {
  it("should create a new user", () => {
    return supertest(server)
      .post("/api/auth/register")
      .send({ username: "bob", password: "1" })
      .then((response) => {
        expect(response.body.username).toBe("bob");
      });
  });
});

describe("POST /api/auth/register/", () => {
  it("should return a status code of 201"),
    () => {
      return supertest(server)
        .post("api/auth/register")
        .send({ username: "bob2", password: "2" })
        .then((response) => {
          expect(response.status).toBe(201);
        });
    };
});

describe("POST /api/auth/login/", () => {
  it("should create a new user", () => {
    return supertest(server)
      .post("/api/auth/register")
      .auth("username", "password")
      .then((response) => {
        expect(response).toHaveLength(response > 0);
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
