const supertest = require("supertest");
const server = require("./server.js");
const { insert } = require("../friends/friendsModel.js");
const db = require("../data/dbConfig.js");

describe("testing tests", () => {
  it("should be true", () => {
    expect(true).toBe(true);
  });

  describe("GET/", () => {
    it("responds with 200 ok", () => {
      return supertest(server)
        .get("/")
        .expect(200);
    });

    it("responses are in json format", () => {
      return supertest(server)
        .get("/")
        .expect("Content-Type", /json/i);
    });

    it("responds {api: 'is alive'}", async () => {
      await supertest(server)
        .get("/")
        .then(res => {
          expect(res.body).toEqual({ api: "is alive" });
        });
    });
  });

  describe("POST /friends", () => {
    it("respond with 404 when nothing is sent through", () => {
      return supertest(server)
        .post("/friends")
        .expect(500);
    });

    it("POST /friends", async () => {
      const friends = { name: "Rachel" };
      const res = await supertest(server)
        .post("/friends")
        .send(friends);
      expect(res.status).toEqual(201);
    });
  });

  describe("DELETE /friends", async () => {
    beforeEach(async () => {
      await db("friends").truncate();
    });
    //   it("respond with 500 when friend ID doesn't exist", () => {
    //     const res = await supertest(server)
    //     .delete('/friends/1');
    //     expect(res.status).toEqual(500)
    //   })
    it("should respond with a 204 status when friend is successfully deleted", async () => {
      let friends = { name: "Chandler" };
      await supertest(server)
        .post("/friends")
        .send(friends);

      let res = await supertest(server).delete("/friends/1");
      expect(res.status).toEqual(204);
    });
  });
});
