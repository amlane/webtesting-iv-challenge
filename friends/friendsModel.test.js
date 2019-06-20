const db = require("../data/dbConfig.js");
const { insert, remove } = require("./friendsModel.js");

describe("friends model", () => {
  beforeEach(async () => {
    await db("friends").truncate();
  });

  it("should be true", () => {
    expect(true).toBe(true);
  });

  it("should set environment to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("insert()", () => {
    it("should add a new friend", async () => {
      await insert({ name: "Chandler" });
      const friends = await db("friends");
      expect(friends).toHaveLength(1);
    });

    it("should insert the provided friend", async () => {
      let friend = { name: "Monica" };
      const inserted = await insert(friend);
      expect(inserted.name).toBe(friend.name);
    });
  });

  it("should remove the specified friend", async () => {
    const res = await insert({ name: "Chandler" });
    await remove(res[0]);
    const friends = await db("friends");
    expect(friends).toHaveLength(0);
  });
});
