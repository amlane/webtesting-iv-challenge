const supertest = require("supertest");
const server = require("./server.js");

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

    it("responds {api: 'is alive'}", () => {
      return supertest(server)
        .get("/")
        .then(res => {
          expect(res.body).toEqual({ api: "is alive" });
        });
    });

    it("responds {api: 'is alive'}", () => {
      return supertest(server)
        .get("/")
        .then(res => {
          expect(res.body).toEqual({ api: "is alive" });
        });
    });
  });
});
